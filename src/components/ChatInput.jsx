import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { LanguageContext } from '../App';
import './ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const { t } = useContext(LanguageContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <motion.div
            className="chat-input-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <form onSubmit={handleSubmit} className="chat-input-wrapper">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.chat?.inputPlaceholder || "Tell Ellysse what your agent should do..."}
                    className="chat-textarea"
                    rows={1}
                />
                <div className="chat-actions">
                    <button type="submit" className="action-btn send-btn" disabled={!message.trim()}>
                        <FaArrowUp />
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ChatInput;
