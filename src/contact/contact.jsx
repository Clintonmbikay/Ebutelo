import React, { Component } from 'react'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import './style.css'
import Faqs from '../components/faqs'

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <section id="Contact-us">
                    <div class="container">
                        <div class="contact-erea">
                            <h2 class="title-section">Contactez-nous</h2>
                            <p>N'hésitez pas à nous contacter pour discuter de vos projets.
                                Notre équipe est là pour vous aider à <br />concrétiser vos idées et à atteindre vos objectifs
                                numériques.
                            </p>

                            <div class="contact-data">
                                <div class="contact-tel" data-aos="fade-right" data-aos-duration="1500">
                                    <div class="contact-card">
                                        <div class="circle-conctat-icon">
                                            <ion-icon name="call-outline"></ion-icon>
                                        </div>
                                        <div class="phone">
                                            <h3>Numéro de téléphone</h3>
                                            <span>+243 854 077 705</span>
                                        </div>
                                    </div>

                                    <div class="contact-card">
                                        <div class="circle-conctat-icon">
                                            <ion-icon name="mail-outline"></ion-icon>
                                        </div>
                                        <div class="phone">
                                            <h3>Adresse mail</h3>
                                            <span>contact@ebutelo.com</span>
                                        </div>
                                    </div>

                                    <div class="contact-card">
                                        <div class="circle-conctat-icon">
                                            <ion-icon name="location-outline"></ion-icon>
                                        </div>
                                        <div class="phone">
                                            <h3>Adresse physique</h3>
                                            <span>N°1, Av. Mpolo Maurice, C/Gombe</span>
                                        </div>
                                    </div>
                                </div>


                                <div class="contact-form">
                                    <form method="">
                                        <div class="input-label">
                                            <label for="name">Entrez ici votre nom</label>
                                            <input id="name" type="text" placeholder="Ex. Jean-Luc Binyavanga" />
                                        </div>

                                        <div class="input-label">
                                            <label for="mail">Entrez ici votre Adresse mail</label>
                                            <input id="mail" type="mail" placeholder="Ex. adresse@exemple.com" />
                                        </div>

                                        <div class="input-label">
                                            <label for="phone">Entrez ici votre numéro téléphone</label>
                                            <input id="phone" type="number" placeholder="Ex. (+243) 840 854 214" />
                                        </div>

                                        <div class="input-label">
                                            <label for="subject">Entrez ici votre sujet</label>
                                            <input id="subject" type="text" placeholder="Ex. Demande de dévis" />
                                        </div>

                                        <div class="input-label">
                                            <label for="message">Ecrivez votre message ici</label>
                                            <textarea placeholder="Message..." class="txtarea" id="message" rows="5"></textarea>
                                            <input type="submit" value="Envoyez" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Faqs />
                <FooterComponent />
            </div>
        )
    }
}
