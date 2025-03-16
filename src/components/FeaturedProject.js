import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './FeaturedProject.css';

const FeaturedProject = () => {
    const files = [
        'Home.md',
        'Architecture.md',
        'Design-of-the-back‐end.md',
        'Displays-of-original.md',
        'Stories-of-User.md'
    ];

    const [selectedFile, setSelectedFile] = useState(files[0]); // Selecciona el primer archivo por defecto
    const [content, setContent] = useState('Charging content...');

    useEffect(() => {
        const loadFile = async () => {
            if (!selectedFile) return;

            try {
                const url = `https://raw.githubusercontent.com/wiki/JffMv/Emulator-Among-Us-Front/${selectedFile}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('No se pudo cargar el archivo');

                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading file:', error);
                setContent('Error al cargar el contenido. Verifica que el archivo existe en la Wiki de GitHub.');
            }
        };

        loadFile();
    }, [selectedFile]);

    return (
        <div className="featured-project">
            <h1 className="h1-1">Featured Project - Emulator of Among Us</h1>
            <a className="h2-1" href="https://github.com/JffMv/Emulator-Among-Us-Front/wiki" target="_blank" rel="noopener noreferrer">
                <h2>Show Wiki on GitHub</h2>
            </a>
            <nav className="nav-container">
                <ul className="nav-1">
                    {files.map(file => (
                        <li
                            className={`nav-item ${file === selectedFile ? 'active' : ''}`}
                            key={file}
                            onClick={() => setSelectedFile(file)}
                        >
                            {file}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="info-container-1">
                <div className="info-section-1">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
