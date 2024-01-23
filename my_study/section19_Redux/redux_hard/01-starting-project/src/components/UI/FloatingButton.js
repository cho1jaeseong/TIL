// FloatingButton.js
import React, { useState } from 'react';
import './FloatingButton.css';  // CSS 파일 import
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const FloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={toggleModal}>
        {isModalOpen ? 'X' : 'O'}
      </button>
      <AnimatePresence>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButton;
