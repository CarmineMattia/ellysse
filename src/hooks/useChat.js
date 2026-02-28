import { useState, useEffect, useCallback } from 'react';
import { loadContext } from '../utils/loadContext';
import { getAIResponse } from '../services/ai';

export const useChat = (initialMessages = []) => {
    const [messages, setMessages] = useState(initialMessages);
    const [isTyping, setIsTyping] = useState(false);
    const [context, setContext] = useState('');

    useEffect(() => {
        const fetchContext = async () => {
            const text = await loadContext();
            setContext(text);
        };
        fetchContext();
    }, []);

    const [activeScenario, setActiveScenario] = useState(null); // 'local', 'meta', 'oracle'

    const sendMessage = useCallback(async (text, translations) => {
        if (!text.trim()) return;

        const userMessage = { id: Date.now(), type: 'user', text: text.trim() };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        try {
            // Check for "Sorprendimi" trigger using translations if available
            const surpriseTrigger = translations?.chat?.suggestions?.[2]?.text || "Sorprendimi";
            const scenariosData = translations?.chat?.scenarios;

            // Handle active scenario responses
            if (activeScenario && scenariosData) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                let responseText = "";
                const currentScenarioData = scenariosData[activeScenario];

                if (activeScenario === 'local') {
                    const lowerText = text.toLowerCase();
                    if (lowerText.includes('parmigiano')) {
                        responseText = currentScenarioData.correct;
                    } else {
                        responseText = currentScenarioData.wrong;
                    }
                } else if (activeScenario === 'meta') {
                    responseText = currentScenarioData.response;
                } else if (activeScenario === 'oracle') {
                    // Extract the first word or use the whole text if short
                    const firstWord = text.split(' ')[0];
                    responseText = `${currentScenarioData.responsePrefix}'${firstWord}'${currentScenarioData.responseSuffix}`;
                }

                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'ai',
                    text: responseText
                }]);
                setActiveScenario(null); // Reset scenario
                setIsTyping(false);
                return;
            }

            // Handle "Sorprendimi" trigger
            if (text.trim() === surpriseTrigger && scenariosData) {
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Randomly select a scenario
                const scenarios = ['local', 'meta', 'oracle', 'video'];
                const selectedScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

                if (selectedScenario === 'video') {
                    setMessages(prev => [...prev, {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Ecco chi sono veramente...",
                        video: '/videos/elly.mp4'
                    }]);
                    setIsTyping(false);
                    return;
                }

                const introText = scenariosData[selectedScenario].intro;

                setActiveScenario(selectedScenario);
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'ai',
                    text: introText
                }]);
                setIsTyping(false);
                return;
            }

            // Handle direct video request (Easter Egg)
            const lowerText = text.toLowerCase();
            if ((lowerText.includes('chi sei') || lowerText.includes('video') || lowerText.includes('mostrami')) &&
                (lowerText.includes('elly') || lowerText.includes('tua faccia') || lowerText.includes('chi sei'))) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'ai',
                    text: "Piacere di conoscerti!",
                    video: '/videos/elly.mp4'
                }]);
                setIsTyping(false);
                return;
            }

            // Normal AI response
            const aiResponseText = await getAIResponse([...messages, userMessage], context);
            const aiMessage = {
                id: Date.now() + 1,
                type: 'ai',
                text: aiResponseText
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error getting response:", error);
            const errorMessage = {
                id: Date.now() + 1,
                type: 'ai',
                text: "Mi dispiace, ho riscontrato un problema. Riprova più tardi."
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    }, [messages, context, activeScenario]);

    const clearMessages = useCallback(() => {
        setMessages([]);
    }, []);

    return {
        messages,
        isTyping,
        sendMessage,
        clearMessages,
        setMessages // Exporting setMessages in case we need manual control (e.g. initial greeting)
    };
};
