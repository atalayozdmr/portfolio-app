import React from 'react';
import { motion } from 'framer-motion';

const techList = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'API',
  'ASP.NET Core',
  'MVC',
  'Bootstrap',
  'Tailwind',
  'Git & GitHub'
];

const Technologies: React.FC = () => {
  return (
    <motion.div
      className="technologies-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Bildiğim Teknolojiler</h2>
      <div className="tech-grid">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-card"
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
