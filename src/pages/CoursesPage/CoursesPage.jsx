import React, { useEffect, useState } from 'react';
import './CoursesPage.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { tutoriais as localTutoriais } from '../../data/database';
import { useLocation, Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';


function CoursesPage() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const [tutoriais, setTutoriais] = useState([]);

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
                    <img src="/ML.svg" alt="Imagem do tutorial" />
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
      <WhatsAppIcon />
    </>
  );
}

export default CoursesPage;
