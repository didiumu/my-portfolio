import './Skills.css';

const skills = [
  {
    domain: 'Development',
    subtitle: 'Software & Tools',
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    domain: 'Cybersecurity',
    subtitle: 'Security & Protection',
    items: ['Network Security', 'Penetration Testing', 'Ethical Hacking', 'Linux', 'Firewalls & IDS', 'OWASP'],
  },
  {
    domain: 'AI & Data',
    subtitle: 'Intelligence & Analysis',
    items: ['Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis', 'NLP', 'Model Deployment'],
  },
  {
    domain: 'Electronics & Systems',
    subtitle: 'Hardware & Infrastructure',
    items: ['Telecommunications', 'Circuit Design', 'Signal Processing', 'AWS', 'Network Protocols', 'IoT'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2 className="skills-heading">SKILLS</h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.domain} className="skills-card">
              <div className="skills-card-header">
                <h3 className="skills-domain">{group.domain}</h3>
                <span className="skills-subtitle">{group.subtitle}</span>
              </div>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item} className="skills-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
