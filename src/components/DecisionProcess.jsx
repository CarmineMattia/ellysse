import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaUser, FaBrain, FaDatabase, FaComments } from 'react-icons/fa';
import { TbBrandCSharp, TbSparkles } from 'react-icons/tb';
import './DecisionProcess.css';

const DecisionProcess = () => {
    const { t } = useContext(LanguageContext);
    const [activeTab, setActiveTab] = useState('workflow');

    const codeSnippet = `public class EllysseAgent : BaseAgent
{
    public async Task<Response> ProcessInteractionAsync(string userInput, Dictionary<string, object> context)
    {
        // 1. Intent Classification & Entity Extraction
        var intent = await _nluService.ClassifyIntentAsync(userInput);

        // 2. Semantic Search in Vector Database
        var relevantDocs = await _knowledgeBase.SearchAsync(
            query: userInput,
            filters: context.GetValueOrDefault("filters"),
            topK: 5
        );

        // 3. Generate Contextual Response
        var response = await _llmService.GenerateAsync(
            prompt: _prompts[intent.Type],
            context: relevantDocs,
            history: context.GetValueOrDefault("history"),
            temperature: 0.7
        );

        return response;
    }
}`;

    return (
        <section className="decision-process section-dark" id="how-it-works">
            <div className="container">
                <div className="process-header">
                    <h2 className="section-title text-center">
                        {t.decision?.title || 'How our bots / agents work'}
                    </h2>
                    <p className="section-subtitle text-center">
                        {t.decision?.subtitle || 'Understand the logic behind every interaction.'}
                    </p>
                </div>

                <div className="process-interface">
                    <div className="process-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
                            onClick={() => setActiveTab('workflow')}
                        >
                            <span className="icon">⚡</span> Workflow
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                            onClick={() => setActiveTab('code')}
                        >
                            <span className="icon"><FaCode /></span> Code
                        </button>
                    </div>

                    <div className="process-display">
                        <AnimatePresence mode="wait">
                            {activeTab === 'workflow' ? (
                                <motion.div
                                    key="workflow"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="workflow-view"
                                >
                                    <div className="node input-node">
                                        <div className="node-icon"><FaUser /></div>
                                        <div className="node-label">{t.decision?.workflow?.input || 'User Input'}</div>
                                    </div>
                                    <div className="connector"></div>
                                    <div className="node process-node">
                                        <div className="node-icon"><FaBrain /></div>
                                        <div className="node-label">{t.decision?.workflow?.intent || 'Intent Analysis'}</div>
                                    </div>
                                    <div className="connector"></div>
                                    <div className="node process-node">
                                        <div className="node-icon"><FaDatabase /></div>
                                        <div className="node-label">{t.decision?.workflow?.context || 'Context Retrieval'}</div>
                                    </div>
                                    <div className="connector"></div>
                                    <div className="node process-node">
                                        <div className="node-icon"><TbSparkles /></div>
                                        <div className="node-label">{t.decision?.workflow?.generation || 'AI Generation'}</div>
                                    </div>
                                    <div className="connector"></div>
                                    <div className="node output-node">
                                        <div className="node-icon"><FaComments /></div>
                                        <div className="node-label">{t.decision?.workflow?.response || 'Response'}</div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="code"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="code-view-container"
                                >
                                    <div className="code-header">
                                        <div className="file-info">
                                            <TbBrandCSharp className="file-icon csharp-icon" style={{ color: '#9b4993' }} />
                                            <span className="file-name">AgentCore.cs</span>
                                        </div>
                                        <div className="window-controls">
                                            <span className="control red"></span>
                                            <span className="control yellow"></span>
                                            <span className="control green"></span>
                                        </div>
                                    </div>
                                    <div className="code-content">
                                        <pre>
                                            <code>{codeSnippet}</code>
                                        </pre>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DecisionProcess;
