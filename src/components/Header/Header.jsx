// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  const handleLogout = () => {
    // Aqui você pode limpar autenticação, tokens, etc.
    window.location.href = '/'; // Redireciona para login
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Espaço reservado para logo ou título, se quiser */}
        <div></div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
