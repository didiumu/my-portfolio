import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const links = [
  {
    icon: <FaEnvelope />,
    href: 'mailto:umumarididi@gmail.com',
    title: 'Send me an email',
    label: 'Email',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/didiumu',
    title: 'Visit my GitHub',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/umutoni-mariette-8a931a26a/',
    title: 'Connect on LinkedIn',
    label: 'LinkedIn',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2 className="contact-heading">CONTACT</h2>
        <p className="contact-sub">Let's connect and build something amazing</p>

        <div className="contact-icons">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              title={link.title}
              className="contact-icon-btn"
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noreferrer' : undefined}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
