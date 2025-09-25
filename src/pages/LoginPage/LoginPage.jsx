// src/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Passo CRÍTICO: Importa os estilos
import logo from '../../assets/logo.svg'; // Importa o logo da pasta assets

function LoginPage() {
  const [username, setUsername] = useState('may.goparts');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Login com usuário: ${username}`);
    navigate('/cursos');
  };

  return (
    <div className="login-page-container">
      
      {/* SEÇÃO ESQUERDA: O FORMULÁRIO */}
      <section className="login-form-section">
        <div className="form-wrapper">
          <header className="form-header">
            <span>🇧🇷 BR</span>
          </header>
          <main className="form-main">
            <img src="/gopartbrasil_logo.jpeg" alt="Logo da Empresa" className="form-logo" />
            <h1>ACESSE E APROVEITE</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <i className="fa fa-user input-icon"></i>
                <input 
                  type="text" 
                  placeholder="Usuário"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="fa fa-lock input-icon"></i>
                <input 
                  type="password" 
                  placeholder="Senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="form-links">
                <a href="#">ESQUECI A SENHA</a>
                <a href="#">SUPORTE</a>
              </div>
              
              <button type="submit" className="btn-acessar">ACESSAR</button>
            </form>
          </main>
          <footer className="form-footer">
            <p>Desenvolvido por Caio lamoglia  :)</p>
            <p>REQUISITOS</p>
          </footer>
        </div>
      </section>

      {/* SEÇÃO DIREITA: A IMAGEM PROMOCIONAL */}
      <section className="promo-section">
        <img src="/gopartsW.png" className="promo-image" />
      </section>

    </div>
  );
}

export default LoginPage;