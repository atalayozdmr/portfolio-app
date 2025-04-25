import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basit bir form gönderme simülasyonu
    setIsMessageSent(true);
    setMessage('');
    setTimeout(() => setIsMessageSent(false), 3000); // Mesaj gönderildi uyarısını 3 saniye göster
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">İletişim</h2>
      <p className="contact-info">
        Beni aşağıdaki platformlarda bulabilirsiniz:
      </p>
      <ul className="contact-list">
        <li>
          <strong>E-posta:</strong> <a href="mailto:atalayozdmrrr@gmail.com">atalayozdmrrr@gmail.com</a>
        </li>
        <li>
          <strong>Telefon:</strong> <a href="tel:+905414697850">+905414697850</a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/atalayozdmr" target="_blank" rel="noopener noreferrer">
            github.com/atalayozdmr
          </a>
        </li>
      </ul>

      <h3>Mesaj Gönder</h3>
      {isMessageSent && <p className="success-message">Mesajınız başarıyla gönderildi!</p>}
      <form onSubmit={handleFormSubmit} className="contact-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı buraya yazın"
          rows={4}
          className="message-input"
        />
        <button type="submit" className="send-button">
          Gönder
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
