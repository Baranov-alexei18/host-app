import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">Home</Link>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/remote-page">Remote Page</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
