import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Hakkımda</h2>
      <p className="about-text">
        15 Eylül 1998'de İstanbul Bakırköy'de dünyaya geldim. Çocukluğumu İstanbul’da geçirdim.
        Adnan Menderes Üniversitesi Matematik Bölümü mezunuyum ve aynı üniversitede yüksek lisansımı tamamladım.
        Siliconmade Academy ile birlikte temel kodlama dersleri aldım.
        Şu anda da backend ve frontend developer olarak öğrenme sürecimi devam ettirmekteyim.
      </p>
    </motion.div>
  );
};

export default About;
