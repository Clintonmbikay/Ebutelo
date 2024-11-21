import React, { Component } from 'react'
import './style.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
export default class PricingPage extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <section id="pricing">
                    <div class="container">
                        <div class="title-wrapper">
                            <h1>Des prix simple et transparents</h1>
                        </div>
                        <div class="switch-wrapper">
                            <span>Installation Hors ligne</span>
                            <div class="switch">
                                <div class="bull change"></div>
                            </div>
                            <span>Installation En ligne</span>
                        </div>
                        <div class="pricing-table">
                            <table class="offline">
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
                                        <td rowspan="3" class="item">Restaurant</td>
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

                                    <tr class="module-group">
                                        <td rowspan="3" class="item">Point de Vente (POS)</td>
                                        <td>POS</td>
                                        <td>15$</td>
                                        <td>85$</td>
                                        <td>800$</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>POS & Comptabilité</td>
                                        <td>40$</td>
                                        <td>110$</td>
                                        <td>3300$</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>POS & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                        <td>8300$</td>
                                    </tr>

                                    {/* Module Facturation */}

                                    <tr>
                                        <td rowspan="3" class="item">Facturation</td>
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

                                    <tr class="module-group">
                                        <td rowspan="4" class="item">Hébergement</td>
                                        <td>Hébergement</td>
                                        <td>100$</td>
                                        <td>-</td>
                                        <td>2500$</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>Hébergement & Restaurant</td>
                                        <td>130$</td>
                                        <td>-</td>
                                        <td>4000$</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité</td>
                                        <td>155$</td>
                                        <td>-</td>
                                        <td>6000$</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                        <td>8300$</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Pricing Online */}

                            <table class="online">
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
                                        <td rowspan="3" class="item">Restaurant</td>
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

                                    <tr class="module-group">
                                        <td rowspan="3" class="item">Point de Vente (POS)</td>
                                        <td>POS</td>
                                        <td>15$</td>
                                        <td>85$</td>
                                        <td rowspan="3">Sur devis</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>POS & Comptabilité</td>
                                        <td>40$</td>
                                        <td>110$</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>POS & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                    </tr>

                                    {/* Module Facturation  */}

                                    <tr>
                                        <td rowspan="3" class="item">Facturation</td>
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

                                    <tr class="module-group">
                                        <td rowspan="4" class="item">Hébergement</td>
                                        <td>Hébergement</td>
                                        <td>100$</td>
                                        <td>-</td>
                                        <td rowspan="4">Sur devis</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>Hébergement & Restaurant</td>
                                        <td>130$</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité</td>
                                        <td>155$</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="module-group">
                                        <td>Hébergement & Restaurant & Comptabilité & RH</td>
                                        <td>40$ + 2$/Employé</td>
                                        <td>110$ + 2$/Employé</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <FooterComponent />
            </div>
        )
    }
}
