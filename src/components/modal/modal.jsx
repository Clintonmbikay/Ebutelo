import React, { useState, useEffect } from 'react';
import './modal.css';
import gsap from 'gsap';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedModule, setSelectedModule] = useState(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                '.modal-content',
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.5 }
            );
        }
    }, [isOpen]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        if (isOpen) {
            gsap.to('.modal-content', {
                duration: 0.5,
                opacity: 0,
                scale: 0,
                onComplete: () => {
                    setIsOpen(false);
                },
            });
        }
    };

    const selectModule = (moduleName) => {
        if (selectedModule === moduleName) {
            setSelectedModule(null);
        } else {
            setSelectedModule(moduleName);
        }
    };

    const confirmSelection = () => {
        if (selectedModule) {
            const shieldUrls = {
                "Ebu-Facture": "https://ebutelo.com/ebu-facture",
                "Ebu-Compta": "https://ebutelo.com/ebu-compta",
                "Ebu-Resto": "https://ebutelo.com/ebu-resto",
                "Ebu-Commmune": "https://ebutelo.com/ebu-commune",
                "Ebu-Hôtel": "https://ebutelo.com/ebu-hotel",
                "Ebu-RH": "https://ebutelo.com/ebu-rh",
                "Ebu-Immo": "https://ebutelo.com/ebu-immo",
                "Ebu-Courrier": "https://ebutelo.com/ebu-courrier",
                "Ebu-POS": "https://ebutelo.com/ebu-pos"
            };

            const targetUrl = shieldUrls[selectedModule];
            if (targetUrl) {
                window.location.href = targetUrl;
            } else {
                alert("URL non définie pour ce module.");
            }
        } else {
            alert("Veuillez sélectionner un module avant de confirmer.");
        }
    };

    return (
        <div>
            <button onClick={openModal}>Créer un compte</button>
            {isOpen && (
                <div id="shield-modal">
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="title-wrapper">
                                <div>
                                    <h2>Modules disponibles</h2>
                                    <p>Choisissez votre module pour créer un compte !</p>
                                </div>
                                <span id="cancelbtn" onClick={closeModal}>X</span>
                            </div>
                            <div className="shield-wrapper">
                                {[
                                    "Ebu-Facture",
                                    "Ebu-Compta",
                                    "Ebu-Resto",
                                    "Ebu-Commmune",
                                    "Ebu-Hôtel",
                                    "Ebu-RH",
                                    "Ebu-Immo",
                                    "Ebu-Courrier",
                                    "Ebu-POS",
                                ].map((module) => (
                                    <div
                                        key={module}
                                        className={`shield-choose ${selectedModule === module ? 'checked' : ''
                                            }`}
                                        onClick={() => selectModule(module)}
                                    >
                                        <h3>{module}</h3>
                                    </div>
                                ))}
                            </div>
                            <button onClick={confirmSelection}>Confirmer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;



