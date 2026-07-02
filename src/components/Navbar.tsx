import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          Software Engineer<span className="accent-dot">.</span>
        </Link>
        <nav className="navbar-nav">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <a href="mailto:placeholder@email.com" className="btn btn-secondary nav-cta">Let's Talk</a>
        </nav>
      </div>
    </header>
  );
}
