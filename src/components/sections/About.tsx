"use client";

import './About.css';
import { motion } from 'framer-motion';
import { Network, Server, Database, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="about-grid">
          <motion.div 
            className="glass-panel about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-text">
              I am a versatile software engineer currently engineering a scalable, high-performance Multi-Vendor eCommerce platform using Next.js. My expertise spans building enterprise-grade backend APIs with .NET (Clean Architecture, DDD, CQRS) and Node.js/Express, alongside crafting responsive, "zero-latency" frontend experiences.
            </p>
            <p className="about-text">
              From building multi-tenant eCommerce ecosystems and complex, real-time social networking clones, to architecting highly secure enterprise volunteer backends and dynamic modules for ride-hailing startups, I specialize in delivering robust, end-to-end applications.
            </p>
            <p className="about-text">
              I thrive on bridging the gap between exceptional UI/UX and resilient data infrastructure, routinely utilizing containerized deployments (Docker) to ensure scalable, maintainable, and production-ready systems.
            </p>
            <p className="about-text">
              I hold a degree in <strong>Computer Science and Engineering</strong> from <strong>Mekelle University - MIT</strong>, which laid the theoretical and practical foundation for my career in software architecture.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-panel about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Focus Areas</h3>
            <ul className="highlight-list">
              <li>
                <div className="highlight-icon-wrapper"><Code2 size={18} /></div>
                <div>
                  <strong>Frontend:</strong> Next.js, React.js, TypeScript, Tailwind CSS, Zustand, Redux Toolkit
                </div>
              </li>
              <li>
                <div className="highlight-icon-wrapper"><Server size={18} /></div>
                <div>
                  <strong>Backend:</strong> C# / .NET 10, Node.js, Express.js
                </div>
              </li>
              <li>
                <div className="highlight-icon-wrapper"><Database size={18} /></div>
                <div>
                  <strong>Systems & Data:</strong> PostgreSQL, MongoDB, Docker, REST APIs
                </div>
              </li>
              <li>
                <div className="highlight-icon-wrapper"><Network size={18} /></div>
                <div>
                  <strong>Architecture:</strong> Clean Architecture, Domain-Driven Design, Microservices, CQRS
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
