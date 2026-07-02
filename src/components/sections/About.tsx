import './About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <h2 className="section-title animate-fade-in-up stagger-1">About Me</h2>
        <div className="about-grid">
          <div className="glass-panel about-content animate-fade-in-up stagger-2">
            <p>
              I am a versatile software engineer currently engineering a scalable, high-performance Multi-Vendor eCommerce platform using Next.js. My expertise spans building enterprise-grade backend APIs with .NET (Clean Architecture, DDD, CQRS) and Node.js/Express, alongside crafting responsive, "zero-latency" frontend experiences.
            </p>
            <p>
              From building multi-tenant eCommerce ecosystems and complex, real-time social networking clones, to architecting highly secure enterprise volunteer backends and dynamic modules for ride-hailing startups, I specialize in delivering robust, end-to-end applications.
            </p>
            <p>
              I thrive on bridging the gap between exceptional UI/UX and resilient data infrastructure (PostgreSQL, MongoDB), routinely utilizing containerized deployments (Docker) to ensure scalable, maintainable, and production-ready systems.
            </p>
          </div>
          <div className="glass-panel about-highlights animate-fade-in-up stagger-3">
            <h3>Focus Areas</h3>
            <ul className="highlight-list">
              <li>
                <strong>Frontend:</strong> Next.js, React.js, TypeScript, Tailwind CSS, Zustand, Redux Toolkit, React Query
              </li>
              <li>
                <strong>Backend:</strong> C# / .NET 10, Node.js, Express.js
              </li>
              <li>
                <strong>Systems & Data:</strong> PostgreSQL, MongoDB, Docker, REST APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
