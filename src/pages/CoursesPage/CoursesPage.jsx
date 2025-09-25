import React from 'react';
import './CoursesPage.css';
import { tutoriais } from '../../data/database';
import { useLocation, Link } from 'react-router-dom';


function CoursesPage() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return (
    <>
      <header className="player-page-header">
        <div className="player-header-content">
          <div className="player-header-left">
            <img src="/gopartbrasil_logo.jpeg" alt="Logo GoParts" className="player-header-logo" />
            <h1>TUTORIAL GOPARTS</h1>
          </div>
          {!isLoginPage && (
            <button
              className="logout-btn"
              onClick={() => {
                Object.keys(localStorage)
                  .filter(key => key.startsWith('progress_'))
                  .forEach(key => localStorage.removeItem(key));
                window.location.href = '/';
              }}
            >
              Logout
            </button>
          )}
        </div>
      </header>
      <main>
        <div className="courses-container">
          <h2>Cursos</h2>
          <div className="course-list">
            {tutoriais.map((tutorial) => (
              <Link
                to={`/tutorial/${tutorial.id}`}
                key={tutorial.id}
                className="course-list-link"
              >
                <div className="course-list-item">
                  <div className="course-img-placeholder">
                    {/* Substitua o src abaixo por uma imagem específica se desejar */}
                    <img src="/public/ML.svg" alt="Imagem do tutorial" />
                  </div>
                  <div>
                    <h3>{tutorial.titulo}</h3>
                    <p>{tutorial.descricao}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default CoursesPage;
