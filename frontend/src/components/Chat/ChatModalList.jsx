// ChatModalList.js

import React from 'react';
import styles from './ChatModalList.module.css';

export default function ChatModalList({ name, chat, date, chatStatus }) {
  return (
    <>
      <button className={styles['chat-button']}>
        <div className='d-flex flex-row p-1 justify-content-between m-1'>
          <div className='d-flex gap-2'>
            <img
              style={{ width: "3em", height: "3rem" }}
              src='/randomimg.png'
              alt='랜덤 이미지'
            ></img>
            <div className='text-start'>
              <p className='m-0'>{name}</p>
              <p className='m-0'>{chat}</p>
            </div>
          </div>
          <div className='position-relative p-2'>
            <small className="form-text text-muted">{date}</small>
            <span
              className={chatStatus ? styles['unread-message-indicator'] : ""}
            ></span>
          </div>
        </div>
      </button>
    </>
  );
}
