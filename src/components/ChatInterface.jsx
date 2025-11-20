import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../App';
import './ChatInterface.css';

const ChatInterface = () => {
    const { t } = useContext(LanguageContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Reset messages when language changes to replay animation with new language
        setMessages([]);

        const initialMessages = t.chat.messages;

        let timeouts = [];

        initialMessages.forEach((msg) => {
            const timeout = setTimeout(() => {
                setMessages((prev) => {
                    // Avoid duplicates if strict mode or rapid updates cause issues
                    if (prev.find(m => m.id === msg.id)) return prev;
                    return [...prev, msg];
                });
            }, msg.delay);
            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [t]); // Re-run when translations change

    return (
        <div className="chat-interface">
            <div className="chat-container">
                <div className="chat-header">
                    <div className="chat-avatar">AI</div>
                    <div className="chat-title">Ellysse AI</div>
                </div>
                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`chat-bubble ${msg.type} fade-in-up`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
