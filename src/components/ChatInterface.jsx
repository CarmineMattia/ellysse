import React, { useState, useEffect, useRef, useContext } from 'react';
import { useChat } from '../hooks/useChat';
import Scene3D from './Scene3D';
import ChatSidebar from './ChatSidebar';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import TechPartners from './TechPartners';
import { LanguageContext } from '../App';
import './ChatInterface.css';

import { AnimatePresence, motion } from 'framer-motion';

const ChatInterface = ({ isLanding = false, isLoading = false }) => {
    const { messages, sendMessage, clearMessages } = useChat();
    const chatContentRef = useRef(null);
    const { t } = useContext(LanguageContext);

    const scrollToBottom = () => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleNewChat = () => {
        clearMessages();
    };

    const handleSendMessage = async (text) => {
        await sendMessage(text, t);
    };

    return (
        <div className={`chat-interface ${isLanding ? 'landing-mode' : ''}`}>
            <div className="scene-background">
                <Scene3D enableControls={!isLanding} />
            </div>

            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="loading-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 50,
                            pointerEvents: 'none'
                        }}
                    >
                        <div className="loading-bar-container" style={{ width: '200px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', marginBottom: '1rem' }}>
                            <motion.div
                                className="loading-bar"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                style={{ height: '100%', background: '#FF6B00' }}
                            />
                        </div>
                        <p className="loading-text" style={{ color: '#fff', fontSize: '0.9rem', letterSpacing: '1px' }}>Loading Experience...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* <ChatSidebar onNewChat={handleNewChat} /> */}

            <AnimatePresence>
                {!isLoading && (
                    <motion.main
                        className="chat-main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="chat-content" ref={chatContentRef}>
                            {messages.length === 0 ? (
                                <div className="welcome-message">
                                    <h1 className="welcome-title text-gradient">{t.chat.welcome}</h1>
                                </div>
                            ) : (
                                <div className="messages-list">
                                    {messages.map(msg => (
                                        <ChatMessage key={msg.id} message={msg} />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="chat-footer-area">
                            <div className="chat-input-area">
                                <div className="suggestions-container">
                                    {t.chat.suggestions?.map((suggestion, index) => (
                                        <button
                                            key={index}
                                            className={`suggestion-btn ${index === 2 ? 'suggestion-btn-cool' : ''}`}
                                            onClick={() => handleSendMessage(suggestion.text, t)}
                                        >
                                            {suggestion.label}
                                        </button>
                                    ))}
                                </div>
                                <ChatInput onSendMessage={handleSendMessage} />
                            </div>
                            {!isLanding && <TechPartners />}
                        </div>
                    </motion.main>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatInterface;
