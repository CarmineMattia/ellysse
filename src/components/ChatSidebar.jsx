import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaCommentAlt, FaBars, FaTimes } from 'react-icons/fa';
import './ChatSidebar.css';

const ChatSidebar = ({ onNewChat }) => {
    const [isOpen, setIsOpen] = useState(false);

    const chats = [
        { id: 1, title: 'New Project Idea', date: 'Today' },
        { id: 2, title: 'Marketing Strategy', date: 'Yesterday' },
        { id: 3, title: 'Code Review', date: 'Last Week' },
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-sidebar"
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="sidebar-header">
                            <button className="close-sidebar-btn" onClick={toggleSidebar}>
                                <FaTimes />
                            </button>
                            <button className="new-chat-btn" onClick={() => { onNewChat(); setIsOpen(false); }}>
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
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatSidebar;
