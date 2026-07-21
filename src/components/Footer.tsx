"use client";

import './Footer.css';
import { motion } from 'framer-motion';
import { Code2, Globe, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Software Engineer<span>.</span></h3>
          <p>Building scalable, high-performance web applications.</p>
        </motion.div>
        
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Globe className="footer-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Code2 className="footer-icon" />
          </a>
          <a href="mailto:placeholder@email.com" aria-label="Email">
            <Mail className="footer-icon" />
          </a>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Software Engineer. All rights reserved.</p>
      </div>
    </footer>
  );
}
