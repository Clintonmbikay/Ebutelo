import React, { Component } from "react";

class FooterComponent extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer>
                <div className="container">
                    <div className="wrapper">
                        <div className="col">
                            <img src="../../images/ebutelo white.png" alt="Logo Ebutelo" />
                            <p>
                                Logiciel de gestion ERP pour les secteurs de l'hôtellerie, de la prestation de services et du commerce de détail/gros.
                                Reparti en plusieurs modules, vous pouvez l'utiliser en ligne ou en local avec des fonctionnalités
                                qui répondent à tous les besoins spécifiques d'un établissement mono ou multisites.
                            </p>
                            <div className="social-media">
                                <ion-icon name="logo-facebook"></ion-icon>
                                <ion-icon name="logo-linkedin"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Nos informations</h4>
                            <div className="adress">
                                <span>Siège Social :</span>
                                <span>N°1, avenue Mpolo Maurice, Commune de la Gombe</span>
                            </div>
                            <div className="adress">
                                <span>Email :</span>
                                <span>contact@ebutelo.com</span>
                            </div>
                            <div className="adress">
                                <span>Téléphone :</span>
                                <span>+243 854 077 705</span>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Liens de navigation</h4>
                            <ul>
                                <li>Accueil</li>
                                <li>À propos</li>
                                <li>Pricing</li>
                                <li>Contacts</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <span id="copyright">
                        ©Copyright EBUTELO {currentYear} | Tous droits réservés. Design By K-360°
                    </span>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
