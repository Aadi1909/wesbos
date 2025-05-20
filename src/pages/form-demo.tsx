import React from 'react';
import BeautifulForm from '../components/BeautifulForm';
import styles from '../styles/FormDemo.module.css';

export default function FormDemo() {
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
    // In a real application, you would send this data to your backend
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Beautiful Form Demo</h1>
        <p className={styles.description}>
          A modern, responsive form with validation and animations
        </p>
      </div>
      
      <div className={styles.formWrapper}>
        <BeautifulForm 
          onSubmit={handleFormSubmit}
          title="Get in Touch"
        />
      </div>
      
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>✨</div>
          <h3>Beautiful Design</h3>
          <p>Modern UI with smooth animations and transitions</p>
        </div>
        
        <div className={styles.feature}>
          <div className={styles.featureIcon}>✅</div>
          <h3>Form Validation</h3>
          <p>Client-side validation with helpful error messages</p>
        </div>
        
        <div className={styles.feature}>
          <div className={styles.featureIcon}>📱</div>
          <h3>Fully Responsive</h3>
          <p>Looks great on all devices, from mobile to desktop</p>
        </div>
      </div>
    </div>
  );
}

