import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Software Engineer<span>.</span></h3>
          <p>Building scalable, high-performance web applications.</p>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:placeholder@email.com">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Software Engineer. All rights reserved.</p>
      </div>
    </footer>
  );
}
