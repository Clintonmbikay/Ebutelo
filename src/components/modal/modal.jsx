import React, { Component } from 'react';
import './modal.css';
import gsap from 'gsap';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedModule: null,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isOpen && !prevState.isOpen) {
            gsap.fromTo(
                '.modal-content',
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.5 }
            );
        }
    }

    openModal = () => {
        this.setState({ isOpen: true });
    };

    closeModal = () => {
        if (this.state.isOpen) {
            gsap.to('.modal-content', {
                duration: 0.5,
                opacity: 0,
                scale: 0,
                onComplete: () => {
                    this.setState({ isOpen: false });
                },
            });
        }
    };

    selectModule = (moduleName) => {
        this.setState((prevState) => ({
            selectedModule: prevState.selectedModule === moduleName ? null : moduleName,
        }));
    };

    confirmSelection = () => {
        const { selectedModule } = this.state;
        const shieldUrls = {
            "Ebu-Facture": "https://ebutelo.com/ebu-facture",
            "Ebu-Compta": "https://ebutelo.com/ebu-compta",
            "Ebu-Resto": "https://ebutelo.com/ebu-resto",
            "Ebu-Commmune": "https://ebutelo.com/ebu-commune",
            "Ebu-Hôtel": "https://ebutelo.com/ebu-hotel",
            "Ebu-RH": "https://ebutelo.com/ebu-rh",
            "Ebu-Immo": "https://ebutelo.com/ebu-immo",
            "Ebu-Courrier": "https://courrier.ebuapp.com/entreprises/request",
            "Ebu-POS": "https://ebutelo.com/ebu-pos",
        };

        const targetUrl = shieldUrls[selectedModule];
        if (selectedModule) {
            if (targetUrl) {
                window.location.href = targetUrl;
            } else {
                alert("URL non définie pour ce module.");
            }
        } else {
            alert("Veuillez sélectionner un module avant de confirmer.");
        }
    };

    render() {
        const { isOpen, selectedModule } = this.state;
        return (
            <div>
                <button onClick={this.openModal}>Créer un compte</button>
                {isOpen && (
                    <div id="shield-modal">
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <div className="title-wrapper">
                                    <div>
                                        <h2>Modules disponibles</h2>
                                        <p>Choisissez votre module pour créer un compte !</p>
                                    </div>
                                    <span id="cancelbtn" onClick={this.closeModal}>
                                        X
                                    </span>
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
                                            className={`shield-choose ${selectedModule === module ? 'checked' : ''}`}
                                            onClick={() => this.selectModule(module)}
                                        >
                                            <h3>{module}</h3>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={this.confirmSelection}>Confirmer</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Modal;
