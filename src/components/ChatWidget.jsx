import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import './ChatWidget.css';
import { useChat } from '../hooks/useChat';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const { messages, isTyping, sendMessage } = useChat([
        { id: 1, type: 'ai', text: 'Ciao! Sono l\'assistente virtuale di Ellysse. Come posso aiutarti oggi?' }
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const text = inputValue;
        setInputValue(''); // Clear input immediately
        await sendMessage(text);
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
