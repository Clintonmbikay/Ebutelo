import React, { useRef } from "react";
import { gsap } from "gsap";

const Faqs = () => {
    const faqsRef = useRef([]);

    const toggleQuestion = (index) => {
        const questionRefs = faqsRef.current;
        const clickedP = questionRefs[index].querySelector("p");
        const clickedH2 = questionRefs[index].querySelector("h2");

        if (clickedP.style.visibility === "visible") {
            // Fermer la question sélectionnée
            gsap.to(clickedP, {
                maxHeight: 0,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    clickedP.style.visibility = "hidden";
                    clickedH2.style.color = "";
                },
            });
        } else {
            // Fermer les autres questions
            const closingAnimations = questionRefs.map((ref, i) => {
                if (i !== index) {
                    const otherP = ref.querySelector("p");
                    const otherH2 = ref.querySelector("h2");
                    if (otherP.style.visibility === "visible") {
                        return new Promise((resolve) => {
                            gsap.to(otherP, {
                                maxHeight: 0,
                                opacity: 0,
                                duration: 0.5,
                                onComplete: () => {
                                    otherP.style.visibility = "hidden";
                                    otherH2.style.color = "";
                                    resolve();
                                },
                            });
                        });
                    }
                }
                return Promise.resolve();
            });

            // Attendre la fermeture des autres avant d'ouvrir la question sélectionnée
            Promise.all(closingAnimations).then(() => {
                clickedP.style.visibility = "visible";
                const autoHeight = clickedP.scrollHeight + "px";
                gsap.fromTo(
                    clickedP,
                    { maxHeight: 0, opacity: 0 },
                    { maxHeight: autoHeight, opacity: 1, duration: 0.5 }
                );
                clickedH2.style.color = "#0F6E80";
            });
        }
    };

    const faqs = [
        {
            question: "Qu'est-ce qu'un ERP et comment peut-il bénéficier à mon entreprise ?",
            answer:
                "Un ERP (Enterprise Resource Planning) est un système de gestion intégré qui centralise les données et les processus de votre entreprise. Il permet d'optimiser la gestion des ressources, d'améliorer la collaboration entre les départements et de prendre des décisions éclairées grâce à des analyses en temps réel.",
        },
        {
            question: "Nos données sont-elles en sécurité avec votre ERP ?",
            answer:
                "Oui, la sécurité de vos données est notre priorité. Notre ERP utilise des protocoles de sécurité avancés, y compris le cryptage des données, des sauvegardes régulières et des contrôles d'accès stricts pour protéger vos informations sensibles.",
        },
        {
            question: "Puis-je personnaliser les modules de l'ERP selon mes besoins ?",
            answer:
                "Absolument ! Notre ERP est conçu pour être flexible. Vous pouvez choisir et personnaliser les modules en fonction des besoins spécifiques de votre entreprise, afin d'optimiser votre gestion.",
        },
        {
            question: "Offrez-vous un support technique après l'implémentation ?",
            answer:
                "Oui, nous offrons un support technique continu après l'implémentation de notre ERP. Notre équipe est disponible pour répondre à vos questions et résoudre tout problème qui pourrait survenir, afin de garantir une utilisation optimale de notre solution.",
        },
        {
            question: "Proposez-vous une période d'essai pour votre ERP ?",
            answer:
                "Oui, nous proposons une période d'essai gratuite de 30 jours pour vous permettre d'explorer toutes les fonctionnalités de notre ERP et de voir comment il peut répondre aux besoins de votre entreprise avant de prendre une décision.",
        },
        {
            question: "Quel type de formation offrez-vous pour les nouveaux utilisateurs de l'ERP ?",
            answer:
                "Nous proposons des sessions de formation complètes pour les nouveaux utilisateurs, comprenant des webinaires, des tutoriels vidéo et un support en ligne. Notre objectif est de garantir que votre équipe soit à l'aise avec le système et puisse en tirer le meilleur parti.",
        },
        {
            question: "L'ERP est-il compatible avec d'autres logiciels que nous utilisons déjà ?",
            answer:
                "Oui, notre ERP est conçu pour s'intégrer facilement avec une variété de logiciels tiers, tels que les outils de comptabilité, de gestion des relations client (CRM) et d'e-commerce. Cela permet une transition fluide et une meilleure collaboration entre vos différents systèmes.",
        },
    ];

    return (
        <section id="faqs">
            <div className="container">
                <div className="title-wrapper">
                    <span className="section-title">Questions fréquemment posées</span>
                    <h1>Des réponses rapides à vos interrogations les plus courantes</h1>
                </div>

                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <div
                            className="question"
                            key={index}
                            ref={(el) => (faqsRef.current[index] = el)}
                            onClick={() => toggleQuestion(index)}
                        >
                            <h2>{faq.question}</h2>
                            <p style={{ visibility: "hidden", maxHeight: 0 }}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
