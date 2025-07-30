import React from 'react';

const Menu = () => (
  <nav style={{
    width: '200px',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
  }}>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ marginBottom: '10px' }}>
        <a href="/">Home</a>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/remote">Remote Page</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
