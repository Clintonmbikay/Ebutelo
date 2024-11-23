import React, { Component, createRef } from 'react'
import './style.css'
import HeaderComponent from '../components/header';
import Modal from "../components/modal/modal";
export default class PricingPage extends Component {
    constructor(props) {
        super(props);
        this.modalRef = createRef();
    }

    switchChanges() {
        const bull = document.querySelector('.bull');
        const onlinePrice = document.querySelector('.online');
        const offlinePrice = document.querySelector('.offline');

        const isOnLeft = bull.style.transform === 'translate(1px, 0.5px)' || bull.style.transform === '';
        if (isOnLeft) {
            bull.style.transform = 'translate(26px, 0.5px)';
            onlinePrice.style.display = 'initial';
            offlinePrice.style.display = 'none';
        } else {
            bull.style.transform = 'translate(1px, 0.5px)';
            onlinePrice.style.display = 'none';
            offlinePrice.style.display = 'initial';
        }
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
                <section id="pricing">
                    <div className="container">
                        <div className="title-wrapper">
                            <h1>Des prix simple et transparents</h1>
                        </div>
                        <div className="switch-wrapper">
                            <span>Installation Hors ligne</span>
                            <div className="switch" onClick={this.switchChanges}>
                                <div className="bull"></div>
                            </div>
                            <span>Installation En ligne</span>
                        </div>
                        <div className="pricing-table">
                            <table className="offline">
                                <thead>
                                    <tr>
                                        <th>Modules</th>
                                        <th>Pack</th>
                                        <th>Abonnement Mensuel sans matériel</th>
                                        <th>Abonnement Mensuel avec matériel</th>
                                        <th>Licence</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td rowspan="3" className="item">Restaurant</td>
                                        <td>Restaurant</td>
                                        <td>30$</td>
                                        <td>100$</td>
                                        <td>800$</td>
                                    </tr>
                                    <tr>
                                        <td>Restaurant & Comptabilité</td>
                                        <td>55$</td>
                                        <td>125$</td>
                                        <td>3000$</td>
                                    </tr>
                                    <tr>
                                        <td>Restaurant & Comptabilité & RH</td>
                                        <td>55$ + 2$/Employé</td>
                                        <td>125$ + 2$/Employé</td>
                                        <td>8300$</td>
                                    </tr>


                                    {/* Module Point Of Sales */}

                                    <tr className="module-group">
                                        <td rowspan="3" className="item">Point de Vente (POS)</td>
                                        <td>POS</td>
                                        <td>15$</td>
                                        <td>85$</td>
                                        <td>800$</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>POS & Comptabilité</td>
                                        <td>40$</td>
                                        <td>110$</td>
                                        <td>3300$</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>POS & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                        <td>8300$</td>
                                    </tr>

                                    {/* Module Facturation */}

                                    <tr>
                                        <td rowspan="3" className="item">Facturation</td>
                                        <td>POS</td>
                                        <td>15$</td>
                                        <td>85$</td>
                                        <td>800$</td>
                                    </tr>
                                    <tr>
                                        <td>POS & Comptabilité</td>
                                        <td>40$</td>
                                        <td>110$</td>
                                        <td>3300$</td>
                                    </tr>
                                    <tr>
                                        <td>POS & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                        <td>8300$</td>
                                    </tr>

                                    {/* Module Hebergement */}

                                    <tr className="module-group">
                                        <td rowspan="4" className="item">Hébergement</td>
                                        <td>Hébergement</td>
                                        <td>100$</td>
                                        <td>-</td>
                                        <td>2500$</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>Hébergement & Restaurant</td>
                                        <td>130$</td>
                                        <td>-</td>
                                        <td>4000$</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité</td>
                                        <td>155$</td>
                                        <td>-</td>
                                        <td>6000$</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                        <td>8300$</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Pricing Online */}

                            <table className="online">
                                <thead>
                                    <tr>
                                        <th>Modules</th>
                                        <th>Pack</th>
                                        <th>Abonnement Mensuel sans matériel</th>
                                        <th>Abonnement Mensuel avec matériel</th>
                                        <th>Licence</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td rowspan="3" className="item">Restaurant</td>
                                        <td>Restaurant</td>
                                        <td>30$</td>
                                        <td>110$</td>
                                        <td rowspan="3">Sur devis</td>
                                    </tr>
                                    <tr>
                                        <td>Restaurant & Comptabilité</td>
                                        <td>55$</td>
                                        <td>135$</td>
                                    </tr>
                                    <tr>
                                        <td>Restaurant & Comptabilité & RH</td>
                                        <td>55$ + 2$/Employé</td>
                                        <td>125$ + 2$/Employé</td>
                                    </tr>


                                    {/* Module Point Of Sales  */}

                                    <tr className="module-group">
                                        <td rowspan="3" className="item">Point de Vente (POS)</td>
                                        <td>POS</td>
                                        <td>15$</td>
                                        <td>85$</td>
                                        <td rowspan="3">Sur devis</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>POS & Comptabilité</td>
                                        <td>40$</td>
                                        <td>110$</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>POS & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                    </tr>

                                    {/* Module Facturation  */}

                                    <tr>
                                        <td rowspan="3" className="item">Facturation</td>
                                        <td>POS</td>
                                        <td>15$</td>
                                        <td>85$</td>
                                        <td rowspan="3">Sur devis</td>
                                    </tr>
                                    <tr>
                                        <td>POS & Comptabilité</td>
                                        <td>40$</td>
                                        <td>110$</td>
                                    </tr>
                                    <tr>
                                        <td>POS & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                    </tr>

                                    {/* Module Hebergement  */}

                                    <tr className="module-group">
                                        <td rowspan="4" className="item">Hébergement</td>
                                        <td>Hébergement</td>
                                        <td>100$</td>
                                        <td>-</td>
                                        <td rowspan="4">Sur devis</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>Hébergement & Restaurant</td>
                                        <td>130$</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité</td>
                                        <td>155$</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
