import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUser } from 'react-icons/fa';
import './ChatInterface.css'; // Reusing existing CSS for now, can extract if needed

const ChatMessage = ({ message }) => {
    const isAi = message.type === 'ai';

    return (
        <motion.div
            className={`chat-message ${isAi ? 'ai-message' : 'user-message'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="message-avatar">
                {isAi ? <FaRobot /> : <FaUser />}
            </div>
            <div className="message-bubble">
                {message.text}
                {message.video && (
                    <div className="message-video-container" style={{ marginTop: '10px', maxWidth: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                        <video
                            src={message.video}
                            controls
                            autoPlay
                            muted
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ChatMessage;
