import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header-card">
      <img
        src="/ben.jpeg"  
        alt="Profil"
        className="profile-img"
      />
      <h1 className="name">Arif Atalay Özdemir</h1>
      <p className="title">FullStack Developer</p>
      <a
        href="https://github.com/atalayozdmr"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        GitHub Profilim
      </a>
    </div>
  );
};

export default Header;
