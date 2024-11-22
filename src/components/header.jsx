import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        // Références pour manipuler les éléments DOM
        this.navRef = createRef();
        this.navMenuRef = createRef();
        this.hamburgerRef = createRef();
        this.logoRef = createRef();
        this.buttonRef = createRef();
    }

    componentDidMount() {
        // Ajout des écouteurs d'événements pour le menu et le scroll
        const hamburger = this.hamburgerRef.current;
        if (hamburger) {
            hamburger.addEventListener("click", this.toggleMenu);
        }
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        // Nettoyage des écouteurs d'événements
        const hamburger = this.hamburgerRef.current;
        if (hamburger) {
            hamburger.removeEventListener("click", this.toggleMenu);
        }
        window.removeEventListener("scroll", this.handleScroll);
    }

    toggleMenu = () => {
        // Animation d'ouverture/fermeture du menu
        const nav = this.navRef.current;

        if (nav.classList.contains("open")) {
            gsap.to(nav, {
                duration: 0.5,
                opacity: 0,
                scale: 0,
                onComplete: () => nav.classList.remove("open"),
            });
        } else {
            nav.classList.add("open");
            gsap.fromTo(
                nav,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.5 }
            );
        }
    };

    handleScroll = () => {
        // Animation de la barre de navigation au scroll
        const navMenu = this.navMenuRef.current;
        const logo = this.logoRef.current;
        const button = this.buttonRef.current;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        const mm = gsap.matchMedia();

        if (scrollY > 100) {
            const tl = gsap.timeline();
            mm.add("(min-width: 426px)", () => {
                tl.to(navMenu, { width: "50%", duration: 0.5 })
                    .to(logo, { height: "30px", duration: 0.5 }, 0)
                    .to(
                        button,
                        {
                            height: "35px",
                            padding: "0 15px",
                            fontSize: "12px",
                            duration: 0.5,
                        },
                        0
                    );
            });
            navMenu.classList.add("shadow-nav");
        } else {
            const tl = gsap.timeline();
            mm.add("(min-width: 426px)", () => {
                tl.to(navMenu, { width: "80%", duration: 0.5 })
                    .to(logo, { height: "50px", duration: 0.5 }, 0)
                    .to(
                        button,
                        {
                            height: "40px",
                            padding: "0 20px",
                            fontSize: "14px",
                            duration: 0.5,
                        },
                        0
                    );
            });
            navMenu.classList.remove("shadow-nav");
        }
    };

    render() {
        const { openModal } = this.props; // Récupération de la prop openModal
        return (
            <header>
                <div className="container" ref={this.navMenuRef}>
                    <div className="logo">
                        <Link to="/">
                            <img
                                ref={this.logoRef}
                                src="../../public/images/ebutelo.png"
                                alt="Logo Ebutelo"
                            />
                        </Link>
                    </div>

                    <nav ref={this.navRef}>
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/about">À propos</Link>
                            </li>
                            <li>
                                <Link to="/pricing">Tarif</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacts</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Bouton pour ouvrir le modal */}
                    <button
                        ref={this.buttonRef}
                        onClick={openModal}
                    >
                        Créer votre compte
                    </button>

                    <div className="hamburger" ref={this.hamburgerRef}></div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
