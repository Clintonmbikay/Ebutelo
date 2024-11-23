import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import HeaderComponent from './components/header'
import FooterComponent from './components/footer'
import Faqs from "./components/faqs";
import animationGsap from "../public/animations";
import WroteEffect from "../public/textEffect";
import Modal from "./components/modal/modal";


function loadAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("header", {
      y: -100,
      opacity: 0,
      duration: 1
    })
      .from("#hero .container .left-side", {
        scale: 0.5,
        opacity: 0,
        duration: 1
      }, 0.3)
      .from("#hero .container .right-side", {
        scale: 0.5,
        opacity: 0,
        duration: 1
      }, 0.3)
  }, []);
}

function useCounterAnimation(id, start, end, duration, delay = 0) {
  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    setTimeout(() => window.requestAnimationFrame(step), delay);
  }, [id, start, end, duration, delay]);
}

export default function App() {

  animationGsap();
  loadAnimation();
  useCounterAnimation("client", 0, 20, 2500, 2500);
  useCounterAnimation("project", 0, 10, 3000, 2500);
  useCounterAnimation("country", 0, 3, 3000, 2500);

  const modalRef = useRef()
  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  }
  return (
    <div className='App'>
      <HeaderComponent openModal={handleOpenModal} />
      <Modal ref={modalRef} />

      <section id="hero">
        <div className="circle-blur"></div>
        <div className="container">
          <div className="left-side">
            <h1>Transformez votre Entreprise grâce à un
              <br /> <WroteEffect />
            </h1>

            <p>Notre ERP sur mesure centralise vos données et
              optimise vos processus,
              offrant une gestion
              efficace
              et une visibilité en temps réel pour soutenir votre croissance et améliorer vos performances.
            </p>
            <Link to='/'> <button>Essai gratuit</button></Link>
            <div className="statistic">
              <div className="data">
                <h3>Clients</h3>
                <span>+<span id="client">0</span></span>
              </div>
              <div className="data">
                <h3>Projets</h3>
                <span>+<span id="project">0</span></span>
              </div>
              <div className="data">
                <h3>Provinces</h3>
                <span>+<span id="country">0</span></span>
              </div>
            </div>
          </div>
          <div className="right-side">
            <img src="../public/images/dashboard-ebu.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id="about-us">
        <div className="container">
          <div className="left-side">
            <span className="section-title">Apropos de nous</span>
            <h1>Le cœur de votre gestion d'entreprise : Ebutelo</h1>
            <p>Ebutelo signifie échelle en français. Nos fonctionnalités s
              ont prêtes à l’emploi et faciles à utiliser pour tout utilisateur,
              même un débutant. Que vous ayez besoin de gérer vos clients, vos stocks,
              vos encaissements, d'envoyer des factures par email ou archiver les documents,
              notre solution offre une interface conviviale et des outils puissants pour optimiser vos processus de gestion
              quotidiens.

            </p>
            <Link to='/contact'><button>En savoir plus</button></Link>
          </div>
          <div className="right-side">
            <img src="../public/images/Desktop.png" alt="" />
          </div>
        </div>
      </section>

      <section id="our-features">
        <div className="container">
          <div className="title-wrapper">
            <span className="section-title">Nos Fonctionnalités</span>
            <h1>Explorez les capacités qui propulsent votre entreprise</h1>
          </div>
          <div className="features">
            <div className="feature-card">
              <ion-icon name="move-outline"></ion-icon>
              <div className="content">
                <h3>Gestion Multisite</h3>
                <p>Centralisez vos sites pour plus de cohérence.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="barcode-outline"></ion-icon>
              <div className="content">
                <h3>Automatisation comptable</h3>
                <p>Gagnez du temps avec l'automatisation.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="restaurant-outline"></ion-icon>
              <div className="content">
                <h3>Fiche Technique</h3>
                <p>Gérez vos stocks et coûts facilement.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="alarm-outline"></ion-icon>
              <div className="content">
                <h3>Planning Réservation</h3>
                <p>Optimisez réservations et espaces.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="wallet-outline"></ion-icon>
              <div className="content">
                <h3>Gestion budgétaire</h3>
                <p>Suivez vos finances en temps réel.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="prism-outline"></ion-icon>
              <div className="content">
                <h3>Gestion Housekeeping</h3>
                <p>Planifiez l'entretien efficacement.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="journal-outline"></ion-icon>
              <div className="content">
                <h3>Gestion Fond de Caisse</h3>
                <p>Suivez les mouvements de caisse.</p>
              </div>
            </div>

            <div className="feature-card">
              <ion-icon name="leaf-outline"></ion-icon>
              <div className="content">
                <h3>Gestion de Congé</h3>
                <p>Suivez absences et congés facilement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us">
        <div className="container">
          <div className="left-side">
            <img id="choose-img" src="../public/images/why.png" alt="" />
            <div className="reasons">
              <div className="card">
                <div className="icon"><ion-icon name="balloon-outline"></ion-icon></div>
                <span>Facile à mettre en oeuvre et utiliser</span>
              </div>
              <div className="card">
                <div className="icon">
                  <ion-icon name="extension-puzzle-outline"></ion-icon>
                </div>
                <span>Tableaux de bord personnalisés</span>
              </div>
              <div className="card">
                <div className="icon"><ion-icon name="cloudy-outline"></ion-icon></div>
                <span>Accédez aux données partout</span>
              </div>
              <div className="card">
                <div className="icon"><ion-icon name="pulse-outline"></ion-icon></div>
                <span>Une solution à moindre coût</span>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="title-wrapper">
              <span className="section-title">Pourquoi nous choisir ?</span>
              <h1>Votre partenaire de confiance pour la transformation numérique</h1>
            </div>
            <p>Notre ERP centralise tous vos processus métiers pour améliorer l'efficacité, réduire les coûts et prendre des décisions éclairées.
              Grâce à des solutions flexibles et personnalisées, nous vous aidons à automatiser les tâches, optimiser la gestion des données en
              temps réel et renforcer la collaboration au sein de votre entreprise. Confiez-nous la digitalisation de vos processus pour
              rester compétitif.</p>
            <Link to='/contact'><button>En savoir plus</button></Link>
          </div>
        </div>
      </section>

      <section id="shield">
        <div className="container">
          <div className="title-wrapper">
            <span className="section-title">Modules du logiciel</span>
            <h1>Des solutions modulaires adaptées à chaque besoin</h1>
          </div>
          <div className="shield-list">
            <div className="shield">
              <div className="icon"><ion-icon name="file-tray-full-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-Facture</h2>
                <p>Créez et gérez vos factures automatiquement, avec des rapports détaillés.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="bar-chart-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-Compta</h2>
                <p>Suivez vos finances et automatisez les écritures comptables.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="business-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-hôtel</h2>
                <p>Gérez facilement chambres, réservations et tarifs.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="accessibility-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-RH</h2>
                <p>Centralisez la gestion des employés, congés et paie.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="fast-food-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-Resto</h2>
                <p>Optimisez la gestion des menus, commandes et stocks.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="desktop-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-POS (Point of Sale)</h2>
                <p>Gérez les ventes et transactions avec des rapports détaillés.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="home-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-IMMO</h2>
                <p>Gérez vos propriétés et paiements de manière simplifiée.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="star-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-Commune</h2>
                <p>Optimisez la gestion des services municipaux et taxes.</p>
              </div>
            </div>
            <div className="shield">
              <div className="icon"><ion-icon name="layers-outline"></ion-icon></div>
              <div className="content">
                <h2>Ebu-Courrier</h2>
                <p>Suivez l'envoi et la réception de courriers et colis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Call-to-action">
        <div className="container">
          <h1>Essayez notre ERP gratuitement dès aujourd'hui et transformez votre gestion d'entreprise !</h1>
          <p>Notre ERP est conçu pour simplifier la gestion de votre entreprise, quel que soit votre secteur d'activité. En centralisant vos données, il vous permet de mieux contrôler vos finances, vos stocks et vos ressources humaines, tout en réduisant les erreurs et les coûts. Avec des outils adaptés à chaque besoin, notre solution vous aide à prendre des décisions plus éclairées, à optimiser vos processus et à gagner en efficacité. Profitez d'une solution modulable, évolutive et parfaitement intégrée à vos besoins. Testez-le gratuitement dès maintenant et voyez la différence !</p>
          <Link to='/'><button>Essayer gratuitement</button></Link>
        </div>
      </section>


      <section id="advantage">

        <div className="container">
          <div className="left-side">
          </div>

          <div className="right-side">
            <div className="title-wrapper">
              <span className="section-title">Avantages</span>
              <h1>Des avantages clairs pour une gestion simplifiée et efficace</h1>
            </div>

            <div className="advantage-wrapper">
              <div className="icon"><ion-icon name="rocket-outline"></ion-icon></div>
              <div className="content">
                <h3>Administration sans papier</h3>
                <p>Nous réduisons considérablement l'utilisation du papier car chaque opération est automatisée:
                  de l'achat d'un article à sa vente jusqu'à sa saisie en comptabilité</p>
              </div>
            </div>

            <div className="advantage-wrapper">
              <div className="icon"><ion-icon name="at-circle-outline"></ion-icon></div>
              <div className="content">
                <h3>Integration technologique</h3>
                <p>Notre objectif est d'avoir l'intégration de la technologie aussi fluide que possible dans
                  votre
                  utilisation quotidienne afin que vous puissiez: Éliminer les erreurs, avoir des rapports en
                  temps réel et des processus rationalisés.</p>
              </div>
            </div>

            <div className="advantage-wrapper">
              <div className="icon"><ion-icon name="shapes-outline"></ion-icon></div>
              <div className="content">
                <h3>Personnalisable</h3>
                <p>Conçu selon les besoins réels de l'entreprise, le logiciel est personnalisable selon les
                  besoins
                  spécifiques du client afin d'optimiser le lot de travail et de rester concentré sur
                  l'essentiel..</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
    </div>
  )
}
