"use client";

import './Hero.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cloud, Database } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <span className="badge hero-badge">
              <span className="pulse-dot"></span> Available for new opportunities
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="hero-title">
            Engineering <br/>
            <span className="hero-highlight">Scalable Systems</span>.
          </motion.h1>
          
          <motion.p variants={item} className="hero-subtitle">
            I am a Full-Stack Software Engineer bridging the gap between exceptional UI/UX and resilient data infrastructure. Specializing in Next.js and high-performance backend architectures.
          </motion.p>
          
          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
        >
          <div className="hero-image-backdrop"></div>
          <motion.div 
            className="hero-image-container"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image 
              src="/BG.png" 
              alt="BG" 
              width={400} 
              height={400} 
              className="hero-image"
              priority
            />
          </motion.div>
          {/* Floating tech badges */}
          <motion.div 
            className="floating-badge text-bold"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ top: '10%', right: '-5%' }}
          >
            <Terminal size={16} className="text-accent" /> Next.js
          </motion.div>

          <motion.div 
            className="floating-badge text-bold"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            style={{ bottom: '20%', left: '-10%' }}
          >
            <Cloud size={16} className="text-accent" /> .NET 10
          </motion.div>

          <motion.div 
            className="floating-badge text-bold"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            style={{ bottom: '5%', right: '10%' }}
          >
            <Database size={16} className="text-accent" /> PostgreSQL
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
