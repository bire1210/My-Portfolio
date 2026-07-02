import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: ["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vanilla CSS", "Redux Toolkit", "Zustand", "React Query"]
    },
    {
      title: "Backend & Systems",
      skills: ["C#", ".NET 10", "Node.js", "Express.js", "REST APIs", "Clean Architecture", "CQRS", "Domain-Driven Design (DDD)"]
    },
    {
      title: "Database & DevOps",
      skills: ["PostgreSQL", "MongoDB", "Entity Framework", "Docker", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-panel">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={skill} className="skill-pill fade-in-skill" style={{animationDelay: `${i * 0.05}s`}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
