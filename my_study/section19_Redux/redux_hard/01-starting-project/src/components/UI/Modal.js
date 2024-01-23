// Modal.js
import React from 'react';
import './Modal.css';  // CSS 파일 import
import { motion } from 'framer-motion';

const Modal = ({ onClose }) => {
  const modalVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const modalTransition = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  };

  return (
    <motion.div
      className="modal-overlay"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={modalTransition}
      onClick={onClose}
    >
      <motion.div className="modal-content" whileHover={{ scale: 1.05 }}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={onClose}>Close Modal</button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
