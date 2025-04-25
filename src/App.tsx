import React, { useState } from 'react';
import Header from './components/header';
import About from './components/about';
import Technologies from './components/Technologies';
import Projects from './components/project';
import Contact from './components/contact';

const App: React.FC = () => {
  // Aktif slide index'i yönetmek için state
  const [activeIndex, setActiveIndex] = useState(0);

  // Kaydırma işlevi
  const handleNext = () => {
    if (activeIndex < 4) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        <div className="carousel-item">
          <Header />
        </div>
        <div className="carousel-item">
          <About />
        </div>
        <div className="carousel-item">
          <Technologies />
        </div>
        <div className="carousel-item">
          <Projects />
        </div>
        <div className="carousel-item">
          <Contact />
        </div>
      </div>

      {/* Oklar */}
      <button className="carousel-prev" onClick={handlePrev}>
        &#8592; {/* Sol ok */}
      </button>
      <button className="carousel-next" onClick={handleNext}>
        &#8594; {/* Sağ ok */}
      </button>
    </div>
  );
};

export default App;
