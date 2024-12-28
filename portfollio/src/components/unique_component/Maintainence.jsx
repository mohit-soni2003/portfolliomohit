import React from 'react';

function Maintainence() {
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '5px solid #dee2e6',
      borderTop: '5px solid #007bff',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <h1 style={styles.heading}>Website Under Maintenance</h1>
      <p style={styles.paragraph}>
        We’re currently making some improvements. Please check back later.
      </p>
    </div>
  );
}

export default Maintainence;
