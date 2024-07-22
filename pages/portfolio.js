import React from 'react';

const Projects = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.h2}>List of Projects</h2>
        <div style={styles.projectGrid}>

          <a href="/brands" style={{ ...styles.projectCard, ...styles.even }}>
            <h3 style={styles.h3}>Excel Web App</h3>
            <p style={styles.p}>This is a description for Project 1.</p>
          </a>

          <a href="/cafes" style={{ ...styles.projectCard, ...styles.even }}>
            <h3 style={styles.h3}>Cafes Directory</h3>
            <p style={styles.p}>This is a description for Project 2.</p>
          </a>
          <a href="/unitconvertor" style={{ ...styles.projectCard, ...styles.odd }}>
            <h3 style={styles.h3}>Unit Convertor</h3>
            <p style={styles.p}>This is a description for Project 3.</p>
          </a>
          <a href="/jobboard" style={{ ...styles.projectCard, ...styles.even }}>
            <h3 style={styles.h3}>Job Board</h3>
            <p style={styles.p}>This is a description for Project 4.</p>
          </a>
          <a href="/timer" style={{ ...styles.projectCard, ...styles.odd }}>
            <h3 style={styles.h3}>Time Tracker</h3>
            <p style={styles.p}>This is a description for Project 5.</p>
          </a>
          <a href="/webbook" style={{ ...styles.projectCard, ...styles.even }}>
            <h3 style={styles.h3}>Digital Book</h3>
            <p style={styles.p}>This is a description for Project 6.</p>
          </a>
          <a href="/wordpress" style={{ ...styles.projectCard, ...styles.odd }}>
            <h3 style={styles.h3}>Wordpress Blogs</h3>
            <p style={styles.p}>This is a description for Project 7.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px',
    backgroundColor: '#f6f6f6',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  h2: {
    textAlign: 'center',
    color: '#333',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  projectCard: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  odd: {
    backgroundColor: '#ffcc99',
  },
  even: {
    backgroundColor: '#99ccff',
  },
  projectCardHover: {
    transform: 'translateY(-5px)',
  },
  projectCardOddHover: {
    backgroundColor: '#ffbf80',
  },
  projectCardEvenHover: {
    backgroundColor: '#80aaff',
  },
  h3: {
    marginBottom: '10px',
  },
  p: {
    marginBottom: 0,
    color: '#010101',
  },
};

export default Projects;
