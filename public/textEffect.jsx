import React, { useState, useEffect } from 'react';

const WroteEffect = () => {
    const texts = ['logiciel à l\'échelle', 'logiciel ERP complet'];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Fonction pour générer une vitesse aléatoire
    const randomSpeed = (min, max) => Math.floor(Math.random() * (max - min) + min);

    // Fonction de jeu de l'animation
    const play = () => {
        const currentText = texts[currentTextIndex];

        if (isDeleting) {
            setIndex((prevIndex) => prevIndex - 1);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }

        // Si le texte est écrit en entier, on attend 1.5s avant de commencer à effacer
        if (!isDeleting && index === currentText.length) {
            setTimeout(() => setIsDeleting(true), 1500);
        }

        // Quand le texte est effacé, on recommence avec le texte suivant
        if (isDeleting && index < 0) {
            setIsDeleting(false);
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setIndex(0);
        }

        // Définir le délai pour la prochaine mise à jour en fonction de l'état (écriture ou suppression)
        const delay = isDeleting ? randomSpeed(30, 150) : randomSpeed(20, 200);
        setTimeout(play, delay);
    };

    // Démarrer l'animation lors du premier rendu ou lorsque les dépendances changent
    useEffect(() => {
        const timer = setTimeout(play, 100); // Ajout d'un léger délai initial
        return () => clearTimeout(timer); // Nettoyage du timeout si le composant est démonté
    }, [index, isDeleting, currentTextIndex]);

    return <span id="wrote-effect">{texts[currentTextIndex].slice(0, index)}</span>;
};

export default WroteEffect;
