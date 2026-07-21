"use client";

import { useState } from 'react';
import './Contact.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

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
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center-wrapper"
        >
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="contact-subtitle">
            I'm currently seeking new opportunities. Whether you have a question, a project in mind, 
            or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div 
          className="glass-panel contact-form-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                key="success"
                className="contact-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring" }}
              >
                <CheckCircle2 size={64} className="success-icon" />
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="btn btn-secondary mt-4" style={{marginTop: '2rem'}}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                className="contact-form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-row">
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
                
                <div className="contact-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary contact-btn" 
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"} 
                    {status !== "loading" && <Send size={18} />}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
