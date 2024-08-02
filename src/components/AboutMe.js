import React from 'react';
import './AboutMe.css'; // Importa el archivo CSS para estilos
import picture_profile from '../assets/picture_profile.jpg';

const AboutMe = () => {
    return (
        <div id= 'about-me' className="about-me-container">
            <div className="about-me-content">
                <div className="profile-picture-container">
                    <img
                        src = {picture_profile}
                        alt="Jefferson Mesa"
                        className="profile-picture"
                    />
                </div>
                <h1>Jefferson Mesa</h1>
                <h2>Estudiante de Ingeniería de Sistemas con Énfasis en Inteligencia Artificial</h2>
                <div className="info-container">
                    <div className="info-section">
                        <h3>Intereses</h3>
                        <ul>
                            <li>Inteligencia Artificial</li>
                            <li>Machine Learning</li>
                            <li>Desarrollo de Software</li>
                            <li>Computación en la Nube</li>
                            <li>Desarrollo de Videojuegos</li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <h3>Educación</h3>
                        <ul>
                            <li>Universidad de Ejemplo</li>
                            <li>Curso de Inteligencia Artificial</li>
                            <li>Curso de Machine Learning</li>
                            <li>Curso de Desarrollo de Software</li>
                            <li>Curso de Computación en la Nube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
