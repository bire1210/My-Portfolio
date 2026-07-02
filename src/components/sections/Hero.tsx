import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="animate-fade-in-up stagger-1">
            <span className="badge hero-badge">
              <span className="pulse-dot"></span> Available for new opportunities
            </span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up stagger-2">
            Engineering <br/>
            <span className="hero-highlight">Scalable Systems</span>.
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up stagger-3">
            I am a Full-Stack Software Engineer bridging the gap between exceptional UI/UX and resilient data infrastructure. Specializing in Next.js and high-performance .NET architectures.
          </p>
          
          <div className="hero-actions animate-fade-in-up stagger-4">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up stagger-3">
          <div className="hero-image-glow"></div>
          <div className="hero-image-container">
            <Image 
              src="/profile.png" 
              alt="Profile Avatar" 
              width={400} 
              height={400} 
              className="hero-image"
              priority
            />
          </div>
          {/* Floating tech badges */}
          <div className="floating-badge float-up-1 text-bold">Next.js</div>
          <div className="floating-badge float-up-2 text-bold">.NET 10</div>
          <div className="floating-badge float-up-3 text-bold">PostgreSQL</div>
        </div>
        
      </div>
    </section>
  );
}
