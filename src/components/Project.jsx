import './Project.css';

const projects = [
  {
    title: 'HealthGuard',
    description:
      'Secure AI-based health self-consultation system with a strong focus on cybersecurity and user privacy protection.',
    github: '#',
  },
  {
    title: 'Speech to Text',
    description:
      'AI application that converts speech into text in real time, improving accessibility and productivity for users.',
    github: '#',
  },
  {
    title: 'Dessert Shop',
    description:
      'Simple e-commerce web application for ordering desserts online, featuring product listing and a complete ordering system.',
    github: '#',
  },
];

export default function Project() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <h2 className="projects-heading">PROJECTS</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <a
                href={project.github}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
