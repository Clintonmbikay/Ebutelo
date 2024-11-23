import React, { Component, createRef } from 'react'
import HeaderComponent from '../components/header'
import Modal from "../components/modal/modal";
import './style.css'
import Faqs from '../components/faqs'

export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.modalRef = createRef();
    }
    render() {
        const handleOpenModal = () => {
            if (this.modalRef.current) {
                this.modalRef.current.openModal();
            }
        }
        return (
            <div>
                <HeaderComponent openModal={handleOpenModal} />
                <Modal ref={this.modalRef} />
                <section id="Contact-us">
                    <div className="container">
                        <div className="contact-erea">
                            <h2 className="title-section">Contactez-nous</h2>
                            <p>N'hésitez pas à nous contacter pour discuter de vos projets.
                                Notre équipe est là pour vous aider à <br />concrétiser vos idées et à atteindre vos objectifs
                                numériques.
                            </p>

                            <div className="contact-data">
                                <div className="contact-tel" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="contact-card">
                                        <div className="circle-conctat-icon">
                                            <ion-icon name="call-outline"></ion-icon>
                                        </div>
                                        <div className="phone">
                                            <h3>Numéro de téléphone</h3>
                                            <span>+243 854 077 705</span>
                                        </div>
                                    </div>

                                    <div className="contact-card">
                                        <div className="circle-conctat-icon">
                                            <ion-icon name="mail-outline"></ion-icon>
                                        </div>
                                        <div className="phone">
                                            <h3>Adresse mail</h3>
                                            <span>contact@ebutelo.com</span>
                                        </div>
                                    </div>

                                    <div className="contact-card">
                                        <div className="circle-conctat-icon">
                                            <ion-icon name="location-outline"></ion-icon>
                                        </div>
                                        <div className="phone">
                                            <h3>Adresse physique</h3>
                                            <span>N°1, Av. Mpolo Maurice, C/Gombe</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="contact-form">
                                    <form method="">
                                        <div className="input-label">
                                            <label for="name">Entrez ici votre nom</label>
                                            <input id="name" type="text" placeholder="Ex. Jean-Luc Binyavanga" />
                                        </div>

                                        <div className="input-label">
                                            <label for="mail">Entrez ici votre Adresse mail</label>
                                            <input id="mail" type="mail" placeholder="Ex. adresse@exemple.com" />
                                        </div>

                                        <div className="input-label">
                                            <label for="phone">Entrez ici votre numéro téléphone</label>
                                            <input id="phone" type="number" placeholder="Ex. (+243) 840 854 214" />
                                        </div>

                                        <div className="input-label">
                                            <label for="subject">Entrez ici votre sujet</label>
                                            <input id="subject" type="text" placeholder="Ex. Demande de dévis" />
                                        </div>

                                        <div className="input-label">
                                            <label for="message">Ecrivez votre message ici</label>
                                            <textarea placeholder="Message..." className="txtarea" id="message" rows="5"></textarea>
                                            <input type="submit" value="Envoyez" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Faqs />
            </div>
        )
    }
}
