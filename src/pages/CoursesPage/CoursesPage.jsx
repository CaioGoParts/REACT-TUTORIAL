import React, { useEffect, useState } from 'react';
import './CoursesPage.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { tutoriais as localTutoriais } from '../../data/database';
import { useLocation, Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';
import { useAuth } from '../../contexts/AuthContext';
import { loadUserProgress } from '../../utils/progressUtils';
import { modulosGestaoTempo, modulosTutorial2 } from '../../data/database';


function CoursesPage() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const [tutoriais, setTutoriais] = useState([]);
  const { currentUser } = useAuth();
  const [tutorialProgress, setTutorialProgress] = useState({});

  useEffect(() => {
    const fetchTutoriais = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tutorials'));
        const tutorialsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (tutorialsData.length > 0) {
          setTutoriais(tutorialsData);
        } else {
          // Fallback to local data if Firestore is empty
          setTutoriais(localTutoriais);
        }
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        // Fallback to local data on error
        setTutoriais(localTutoriais);
      }
    };
    fetchTutoriais();
  }, []);

  // Carregar progresso dos tutoriais quando o usuário estiver logado e os tutoriais carregados
  useEffect(() => {
    const loadTutorialProgress = async () => {
      if (!currentUser || tutoriais.length === 0) return;

      const progressData = {};
      for (const tutorial of tutoriais) {
        try {
          const progress = await loadUserProgress(currentUser.uid, tutorial.id);
          const totalModules = tutorial.id === '1' ? modulosGestaoTempo.length : modulosTutorial2.length;
          progressData[tutorial.id] = {
            completed: progress.completedModules.length,
            total: totalModules
          };
        } catch (error) {
          console.error(`Erro ao carregar progresso do tutorial ${tutorial.id}:`, error);
          const totalModules = tutorial.id === '1' ? modulosGestaoTempo.length : modulosTutorial2.length;
          progressData[tutorial.id] = {
            completed: 0,
            total: totalModules
          };
        }
      }
      setTutorialProgress(progressData);
    };

    loadTutorialProgress();
  }, [currentUser, tutoriais]);
  return (
    <>
      <header className="courses-page-header">
        <div className="courses-header-content">
          <div className="courses-header-left">
            <img src="/gopartswhitelogo.png" alt="Logo GoParts" className="courses-header-logo" />
          </div>
          <div className="courses-header-center">
            <h1>TREINAMENTOS</h1>
          </div>
          <div className="courses-header-right">
            {!isLoginPage && (
              <button
                className="logout-btn"
                onClick={() => {
                  Object.keys(localStorage)
                    .filter(key => key.startsWith('progress_'))
                    .forEach(key => localStorage.removeItem(key));
                  // Usar replace para impedir que o usuário volte pelas abas
                  window.location.replace('/');
                }}
              >
                Logout
              </button>
            )}
          </div>
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
                  <div className="course-header">
                    <div className="course-img-placeholder">
                      {/* Substitua o src abaixo por uma imagem específica se desejar */}
                      <img src="/ML.svg" alt="Imagem do tutorial" />
                    </div>
                    {tutorialProgress[tutorial.id] && (
                      <div className="course-progress">
                        <i className="fa fa-chart-line" aria-hidden="true"></i>
                        <div className="progress-text">
                          <span className="progress-number">{tutorialProgress[tutorial.id].completed}</span>
                          <span className="progress-label">de {tutorialProgress[tutorial.id].total} concluídos</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="course-content">
                    <h3>{tutorial.titulo}</h3>
                    <p>{tutorial.descricao}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <WhatsAppIcon />
    </>
  );
}

export default CoursesPage;
