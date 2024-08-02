import React from 'react';
import './Experience_and_skills.css'; // Asegúrate de crear un archivo CSS para estilos

const Experience_and_skills = () => {
    return (
        <div id='experience-and-skills' className="experience-and-skills-container">
            <h1>Experience and Skills</h1>
            <div className="info-container">
                <div className="info-section">
                    <h3>Skills</h3>
                    <ul>
                        {/* Agrega aquí tus habilidades */}
                        <li>Desarrollo Frontend</li>
                        <li>Desarrollo Backend</li>
                        <li>Machine Learning</li>
                        <li>Programación en Java</li>
                        <li>Desarrollo de APIs REST</li>
                    </ul>
                </div>

            </div>
            <div className="info-container">
                <div className="info-section">

                    <h3>Description</h3>
                    <p>
                        {/* Agrega aquí un párrafo con una descripción de tus habilidades y experiencia */}
                        Soy un ingeniero de software con experiencia en el desarrollo de aplicaciones web y móviles, así
                        como en el diseño de interfaces de usuario. Mi enfoque está en la integración de inteligencia
                        artificial y machine learning en proyectos innovadores. Me apasiona el desarrollo de software y
                        busco continuamente aprender y aplicar nuevas tecnologías.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Experience_and_skills;
