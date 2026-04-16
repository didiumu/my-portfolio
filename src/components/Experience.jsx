import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer – Trainee',
    institution: 'KLab Academy',
    period: '2025 – 2026 · 4 Months',
    points: [
      'Completed 4 months of intensive Full Stack Development training at KLab Academy.',
      'Built full-stack projects using HTML, CSS, and JavaScript.',
      'Applied cybersecurity & AI principles in hands-on training projects.',
      'Developed portfolio projects with clean UI/UX in Figma.',
    ],
  },
  {
    role: 'Lab Attendant',
    institution: 'UR College of Education',
    period: '2009 – 2016',
    points: [
      'Assisted students with computer-related issues (hardware, software, networking).',
      'Managed computer labs and supported practical IT sessions.',
      'Ensured smooth lab operations and assisted during classes.',
    ],
  },
  {
    role: 'Electronics & Telecommunication Training',
    institution: 'IPRC Kigali',
    period: '2011 – 2014',
    points: [
      'Practiced electronic circuit setup, troubleshooting, and maintenance.',
      'Worked on basic telecom systems and technical diagnostics.',
      'Performed electronics diagnostics and maintenance.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <h2 className="experience-heading">EXPERIENCE</h2>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.role} className="experience-card">
              <div className="experience-card-header">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-institution">
                  {exp.institution} <span className="experience-period">{exp.period}</span>
                </p>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
