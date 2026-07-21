"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.header 
      className="navbar-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          Software Engineer<span className="accent-dot">.</span>
        </Link>
        <nav className="navbar-nav">
          {["About", "Experience", "Projects", "Skills"].map((item, i) => (
            <motion.div key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="nav-link">{item}</Link>
            </motion.div>
          ))}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="mailto:placeholder@email.com" className="btn btn-secondary nav-cta">Let's Talk</a>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
