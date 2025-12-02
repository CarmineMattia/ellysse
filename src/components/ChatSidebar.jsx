import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaCommentAlt } from 'react-icons/fa';
import './ChatSidebar.css';

const ChatSidebar = () => {
    const chats = [
        { id: 1, title: 'New Project Idea', date: 'Today' },
        { id: 2, title: 'Marketing Strategy', date: 'Yesterday' },
        { id: 3, title: 'Code Review', date: 'Last Week' },
    ];

    return (
        <motion.div
            className="chat-sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="sidebar-header">
                <button className="new-chat-btn">
                    <FaPlus /> New Chat
                </button>
            </div>
            <div className="sidebar-content">
                <div className="sidebar-section">
                    <h3 className="section-title">Recent</h3>
                    <ul className="chat-list">
                        {chats.map(chat => (
                            <li key={chat.id} className="chat-item">
                                <FaCommentAlt className="chat-icon" />
                                <span className="chat-title">{chat.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">U</div>
                    <div className="user-info">
                        <span className="user-name">User</span>
                        <span className="user-plan">Pro Plan</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatSidebar;
