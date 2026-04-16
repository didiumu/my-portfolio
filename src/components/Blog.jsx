import './Blog.css';

const sections = [
  {
    label: 'Foundation',
    text: 'My journey started with Electronics & Telecommunication engineering, where I built a strong understanding of how systems operate at the hardware level — a foundation that continues to shape how I approach technical problems.',
  },
  {
    label: 'Full-Stack Development',
    text: 'I transitioned into software development and found my passion in building complete digital products. From designing interfaces to architecting backends, I focus on creating solutions that are both functional and user-centered.',
  },
  {
    label: 'Cybersecurity',
    text: 'Security became a natural extension of my technical background. I apply a security-first mindset across every project — writing secure code, protecting user data, and understanding how systems can be exploited and defended.',
  },
  {
    label: 'AI & Automation',
    text: 'I have been exploring artificial intelligence and automation to build smarter applications. My interest lies in using AI to solve real problems — from intelligent data processing to building systems that adapt and respond dynamically.',
  },
  {
    label: 'Today',
    text: 'I now bring together full-stack development, cybersecurity, and AI to deliver practical, secure, and user-focused solutions. I am committed to continuous learning and building technology that makes a meaningful difference.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="blog-container">

        <h2 className="blog-heading">BLOG</h2>

        <div className="blog-article">
          {sections.map((section) => (
            <div key={section.label} className="blog-section">
              <span className="blog-section-label">{section.label}</span>
              <p className="blog-text">{section.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
