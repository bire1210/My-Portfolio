"use client";

import './Skills.css';
import { motion } from 'framer-motion';
import { Layers, TerminalSquare, DatabaseZap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layers size={24} />,
      skills: ["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vanilla CSS", "Redux Toolkit", "Zustand", "React Query"]
    },
    {
      title: "Backend & Systems",
      icon: <TerminalSquare size={24} />,
      skills: ["C#", ".NET 10", "Node.js", "Express.js", "REST APIs", "Clean Architecture", "CQRS", "Domain-Driven Design (DDD)"]
    },
    {
      title: "Database & DevOps",
      icon: <DatabaseZap size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Entity Framework", "Docker", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center-wrapper"
        >
          <h2 className="section-title">Technical Expertise</h2>
        </motion.div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title} 
              className="glass-panel skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="skills-header">
                <div className="skills-icon">{category.icon}</div>
                <h3 className="skills-category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.05, duration: 0.3, type: "spring" }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
