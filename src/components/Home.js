import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [text, setText] = useState('');
    const fullText = 'Bienvenido a mi portafolio profesional';

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(intervalId);
            }
        }, 100); // Ajusta la velocidad de escritura aquí (en milisegundos)

        return () => clearInterval(intervalId);
    }, [fullText]);

    return (
        <div id="home" className="home-container">
            <div className="overlay">
                <h1 className="home-text">{text}</h1>
            </div>
        </div>
    );
};

export default Home;
