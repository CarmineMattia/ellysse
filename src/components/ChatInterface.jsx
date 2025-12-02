import React from 'react';
import Scene3D from './Scene3D';
import ChatSidebar from './ChatSidebar';
import ChatInput from './ChatInput';
import './ChatInterface.css';

const ChatInterface = () => {
    return (
        <div className="chat-interface">
            <div className="scene-background">
                <Scene3D />
            </div>

            <ChatSidebar />

            <main className="chat-main">
                <div className="chat-content">
                    <div className="welcome-message">
                        <h1 className="welcome-title text-gradient">How can I help you today?</h1>
                    </div>
                </div>
                <div className="chat-input-area">
                    <ChatInput />
                </div>
            </main>
        </div>
    );
};

export default ChatInterface;
