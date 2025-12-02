import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperclip, FaArrowUp } from 'react-icons/fa';
import './ChatInput.css';

const ChatInput = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log('Sending:', message);
            setMessage('');
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
                    placeholder="Tell Ellysse what your agent should do..."
                    className="chat-textarea"
                    rows={1}
                />
                <div className="chat-actions">
                    <button type="button" className="action-btn attach-btn">
                        <FaPaperclip />
                    </button>
                    <button type="submit" className="action-btn send-btn" disabled={!message.trim()}>
                        <FaArrowUp />
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ChatInput;
