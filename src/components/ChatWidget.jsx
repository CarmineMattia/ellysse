import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import './ChatWidget.css';
import { loadContext } from '../utils/loadContext';
import { getAIResponse } from '../services/ai';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', text: 'Ciao! Sono l\'assistente virtuale di Ellysse. Come posso aiutarti oggi?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [context, setContext] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Load context when component mounts
        const fetchContext = async () => {
            const text = await loadContext();
            setContext(text);
        };
        fetchContext();
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue.trim();
        const userMessage = { id: Date.now(), type: 'user', text: userText };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            // Get AI response
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
    };

    return (
        <div className="cw-container">
            {isOpen && (
                <div className="cw-window">
                    <div className="cw-header">
                        <div className="cw-avatar">
                            <FaRobot />
                        </div>
                        <div className="cw-header-info">
                            <h3>Ellysse AI</h3>
                            <p>Online</p>
                        </div>
                        <button className="cw-close-btn" onClick={() => setIsOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="cw-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`cw-message ${msg.type === 'user' ? 'cw-user' : 'cw-ai'}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="cw-typing-indicator">
                                <div className="cw-typing-dot"></div>
                                <div className="cw-typing-dot"></div>
                                <div className="cw-typing-dot"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="cw-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Scrivi un messaggio..."
                            className="cw-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="cw-send-btn" disabled={!inputValue.trim() || isTyping}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}

            <button className="cw-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaCommentDots />}
            </button>
        </div>
    );
};

export default ChatWidget;
