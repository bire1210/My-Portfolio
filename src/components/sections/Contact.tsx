import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container contact-container">
        <h2 className="section-title text-center">Let's Build Something Great</h2>
        <p className="contact-subtitle">
          I'm currently seeking new opportunities. Whether you have a question, a project in mind, 
          or just want to say hi, my inbox is always open.
        </p>
        <div className="contact-actions">
          <a href="mailto:placeholder@email.com" className="btn btn-primary contact-btn">
            Send an Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-btn">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
