"use client";

import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container contact-container">
        <h2 className="section-title text-center">Let's Build Something Great</h2>
        <p className="contact-subtitle">
          I'm currently seeking new opportunities. Whether you have a question, a project in mind, 
          or just want to say hi, my inbox is always open.
        </p>

        {status === "success" ? (
          <div className="contact-success">
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon.</p>
            <button onClick={() => setStatus("idle")} className="btn btn-primary mt-4" style={{marginTop: '1rem'}}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            {status === "error" && <p className="contact-error">{errorMessage}</p>}
            
            <div className="contact-actions" style={{marginTop: '2rem'}}>
              <button 
                type="submit" 
                className="btn btn-primary contact-btn" 
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-btn">
                Connect on LinkedIn
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
