// Notification.js
import React, { useEffect, useState } from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [props.status]);

  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses} ${isVisible ? '' : classes.hidden}`;

  return (
    <div className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
