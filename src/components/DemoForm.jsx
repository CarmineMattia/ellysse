import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import './DemoForm.css';

const DemoForm = () => {
    const { t } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <section className="demo-form-section section-padding" id="contact">
            <div className="container">
                <div className="form-wrapper">
                    <h2 className="section-title text-gradient">{t.form.title}</h2>

                    {submitted ? (
                        <div className="success-message">
                            <p>{t.form.success}</p>
                        </div>
                    ) : (
                        <form className="demo-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t.form.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t.form.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">{t.form.company}</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t.form.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary submit-btn">{t.form.submit}</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DemoForm;
