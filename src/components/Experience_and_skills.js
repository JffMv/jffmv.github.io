import React from 'react';
import './Experience_and_skills.css'; // Asegúrate de crear un archivo CSS para estilos

const Experience_and_skills = () => {
    return (
        <div id='experience-and-skills' className="experience-and-skills-container">
            <h1>Experience and Skills</h1>
            <div className="info-container">
            <div className="info-section">
                        <h3>Strengths</h3>
                        <ul>
                            <li>Development IA</li>
                            <li>Integration to IA (LLM´s)</li>
                            <li>Software Design</li>
                            <li>Software Implementation</li>
                            <li>Data analytics </li>
                            <li>PMI guidelines </li>
                            <li>Assertive communication </li>
                            <li>Team work</li>
                            <li>Persistence</li>

                        </ul>
                    </div>

            </div>
            <div className="info-container">
                <div className="info-section">

                    <h3>Description</h3>
                    <p>
                        {/* Agrega aquí un párrafo con una descripción de tus habilidades y experiencia */}
                        Last semester Systems Engineering student with a focus on software development and 
                        Artificial Intelligence at Universidad Escuela Colombiana de Ingeniería Julio Garavito. 
                        I have strong knowledge of software architecture, artificial intelligence models, prompt 
                        engineering, and technologies such as Keras, Spring Boot, React, Java, Python, and JavaScript.
                         Additionally, I have experience working with relational and non-relational databases, data analytics 
                         with Power BI, as well as agile methodologies like XP and SCRUM. I possess strong problem-solving and 
                         teamwork skills, along with experience in user support and student mentoring.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Experience_and_skills;
