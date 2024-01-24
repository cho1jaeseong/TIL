import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatModal from './ChatModal';


const Chat = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "#1E5EFF",
        }}
        transition={{ duration: 0.3 }}
        onClick={toggleDropdown}
        className="d-flex align-items-center justify-content-center p-2"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          backgroundColor: "#4F81FF",
          borderRadius: "1.5rem",
          border: "none",
        }}
      >
        <motion.img
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ rotate: [0, -20, 20, 0], scale: 1.2 }}
          className=""
          style={{
            marginTop: "5px",
            marginLeft: "5px",
            height: "2.0rem",
            width: "2.0rem",
          }}
          src="/chatbot.png"
          alt="채팅 아이콘"
        />
      </motion.button>
      <AnimatePresence>
        {/* Dropdown을 렌더링합니다. */}
        {isDropdownOpen && (
          <motion.div style={{ position: 'fixed', bottom: '4.5rem', right: '1rem', zIndex: 1 }} initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}>
            <ChatModal onClose={closeDropdown} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
