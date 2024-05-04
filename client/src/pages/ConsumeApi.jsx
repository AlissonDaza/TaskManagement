import React, { useEffect, useState } from 'react';
import '../styles/ConsumeApi.css';

const ConsumeApi = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const jsonData = await response.json();
                setCharacters(jsonData.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const { clientX, clientY } = event;
        const { top, left, width, height } = card.getBoundingClientRect();

        const x = (clientX - left - width / 2) / width * 2; 
        const y = (clientY - top - height / 2) / height * 2; 

        const rotateX = y * 10; 
        const rotateY = x * 10; 

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        event.currentTarget.classList.add('card-shadow');
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        event.currentTarget.classList.remove('card-shadow');
    };

    return (
        <div className="container mt-3">
            <h1 style={{color: 'white'}}>Personajes de Rick y Morty:</h1>
            <div className="row">
                {characters.map((character) => (
                    <div key={character.id} className="col-md-4 mb-3">
                        <div
                            className="card"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ transition: 'transform 0.1s', transformStyle: 'preserve-3d', perspective: '1000px' }} // Estilos para efecto 3D
                        >
                            <img src={character.image} className="card-img-top" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">Especie: {character.species}</p>
                                <p className="card-text">Estado: {character.status}</p>
                                <p className="card-text">Género: {character.gender}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConsumeApi;
