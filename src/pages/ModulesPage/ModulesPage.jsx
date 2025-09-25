import React, { useEffect, useState } from 'react';
import './ModulesPage.css';
import { modulosGestaoTempo } from '../../data/database';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';



const ModulesPage = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [completedModules, setCompletedModules] = useState([]);
  // Suporte a múltiplos tutoriais no futuro
  const tutorialId = searchParams.get('tutorialId') || 'default';

  const [statusMap, setStatusMap] = useState({});
  useEffect(() => {
    const key = `progress_${tutorialId}`;
    let progress = [];
    try {
      progress = JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) { progress = []; }
    setCompletedModules(progress);

    // Lê status dos módulos
    const statusKey = `status_${tutorialId}`;
    let statusObj = {};
    try {
      statusObj = JSON.parse(localStorage.getItem(statusKey)) || {};
    } catch (e) { statusObj = {}; }
    setStatusMap(statusObj);
    // eslint-disable-next-line
  }, [tutorialId]);

  return (
    <>
      <header className="modules-page-header">
        <div className="modules-header-content">
          <div className="modules-header-left">
            <img src="/gopartbrasil_logo.jpeg" alt="Logo GoParts" className="modules-header-logo" />
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
        <div className="modules-page">
          <h2>Módulos do Curso</h2>
          <ul className="modules-list">
            {modulosGestaoTempo.map((modulo, idx) => {
              const isCompleted = completedModules.includes(modulo.moduleId);
              let isLocked = false;
              if (idx === 0) isLocked = false;
              else {
                const prevModule = modulosGestaoTempo[idx - 1];
                isLocked = !completedModules.includes(prevModule.moduleId);
              }
              // Status: se bloqueado, sempre 'A concluir'. Se concluído, 'Concluído'. Se desbloqueado e não concluído, 'Estágio atual'.
              let status = 'Estágio atual';
              if (isLocked) {
                status = 'A concluir';
              } else if (isCompleted) {
                status = 'Concluído';
              }
              if (isLocked) {
                return (
                  <li key={modulo.moduleId} className="module-item locked">
                    <i className="fa fa-lock" aria-label="Bloqueado" style={{marginRight:8}}></i>
                    <span>{modulo.title}</span>
                    <span style={{marginLeft:8, fontSize:'0.95em', color:'#888'}}>{status}</span>
                  </li>
                );
              }
              return (
                <li
                  key={modulo.moduleId}
                  className={`module-item clickable${isCompleted ? ' completed' : ''}`}
                  onClick={() => navigate(`/player?tutorialId=${tutorialId}`, { state: { modulo } })}
                  tabIndex={0}
                  role="button"
                  style={{ cursor: 'pointer' }}
                >
                  {isCompleted ? <i className="fa fa-check-circle" style={{color:'#28a745',marginRight:8}}></i> : null}
                  <span>{modulo.title}</span>
                  <span style={{marginLeft:8, fontSize:'0.95em', color: isCompleted ? '#28a745' : '#888'}}>{status}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default ModulesPage;
