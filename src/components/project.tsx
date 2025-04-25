import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Kişisel Portfolyo Uygulaması',
    description: 'React, TypeScript ve Framer Motion kullanarak oluşturduğum kişisel portfolyo uygulaması.',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
    link: 'https://github.com/atalayozdmr/portfolio',
  },
  {
    title: 'Öğrenci Bilgi Sistemi',
    description: 'ASP.NET Core ve SQL Server kullanarak geliştirdiğim öğrenci bilgi yönetim sistemi.',
    technologies: ['ASP.NET Core', 'SQL Server', 'EF Core'],
    link: 'https://github.com/atalayozdmr/student-info-system',
  },
  {
    title: 'React ile Mağaza Sayfası',
    description: 'API üzerinden veri çekerek oluşturduğum küçük bir mağaza sayfası. Ürünler dinamik olarak listeleniyor.',
    technologies: ['React', 'Axios', 'API'],
    link: 'https://github.com/atalayozdmr/Reactproject',
  },
];

const Projects: React.FC = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Projelerim</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Kullanılan Teknolojiler:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Projeyi Görüntüle
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
