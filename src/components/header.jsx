import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.navRef = createRef();
        this.navMenuRef = createRef();
        this.hamburgerRef = createRef();
        this.logoRef = createRef();
        this.buttonRef = createRef();
    }

    componentDidMount() {
        const hamburger = this.hamburgerRef.current;
        if (hamburger) {
            hamburger.addEventListener("click", this.toggleMenu);
        }
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        const hamburger = this.hamburgerRef.current;
        if (hamburger) {
            hamburger.removeEventListener("click", this.toggleMenu);
        }
        window.removeEventListener("scroll", this.handleScroll);
    }

    toggleMenu = () => {
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
        const { openModal } = this.props;
        return (
            <header>
                <div className="container" ref={this.navMenuRef}>
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/">
                            <img
                                ref={this.logoRef}
                                src="../../images/ebutelo.png"
                                alt="Logo Ebutelo"
                            />
                        </Link>
                    </div>

                    <nav ref={this.navRef}>
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            {/* <li>
                                <Link to="/about">À propos</Link>
                            </li> */}
                            <li>
                                <Link to="/pricing">Tarif</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacts</Link>
                            </li>
                        </ul>
                    </nav>

                    <button ref={this.buttonRef} onClick={this.props.openModal}>Créer votre compte</button>

                    <div className="hamburger" ref={this.hamburgerRef}></div>
                </div>
            </header>

        );
    }
}

export default HeaderComponent;
