import React from 'react';
import heroImg from '../assets/me.jpg';
import './Home.css';

const Home = () => {
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv_umutoni_mariette.pdf';
  link.download = 'Umutoni_Mariette_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">

          <div className="hero-text">
            <p className="hero-greeting">Hello, It's Me</p>
            <h1 className="hero-name">Umutoni Mariette</h1>
            <h2 className="hero-title">Full Stack Developer & Security Enthusiast</h2>
            <p className="hero-bio">
              With a background in Electronics & Telecommunication, specializing in
              Cybersecurity, AI, and IT, I build secure and user-focused digital solutions
              through continuous hands-on learning.
            </p>
            <div className="hero-actions">
              <button className="hero-btn" onClick={handleDownloadCV}>
                Download CV
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-ring">
              <img src={heroImg} alt="Mariette" className="profile-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;