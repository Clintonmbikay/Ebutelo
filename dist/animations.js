import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const animationGsap = () => {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#about-us",
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        })
            .from("#about-us .container .left-side", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "circ.out"
            })
            .from("#about-us .container .right-side", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "circ.out"
            }, 0)

        // ************************************** Our features Section animation *****************************************

        gsap.timeline({
            scrollTrigger: {
                trigger: "#our-features",
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        })
            .from("#our-features .title-wrapper", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })
            .from(".feature-card", {
                scale: 0.5,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            }, 0.5)

        // ************************************** Why-choose-us Section animation *****************************************

        gsap.timeline({
            scrollTrigger: {
                trigger: "#why-choose-us",
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },

        })
            .from("#choose-img", {
                scale: 0.5,
                opacity: 0,
                duration: 1,
            })
            .from(".reasons .card", {
                x: -200,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
            }, 0.5)
            .from("#why-choose-us .right-side", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "circ.out"
            }, 0.5)

        // ************************************** Shield Section animation *****************************************

        gsap.timeline({
            scrollTrigger: {
                trigger: "#shield",
                start: 'top 60%',
                toggleActions: 'play none none reverse',
            },
        })
            .from("#shield .title-wrapper", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })
            .from(".shield", {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                stagger: 0.2,
            }, 0.5)

        // ************************************** Testimonials Section animation *****************************************

        gsap.timeline({
            scrollTrigger: {
                trigger: "#testimonial",
                start: 'top 60%',
                toggleActions: 'play none none reverse',
            },
        })
            .from("#testimonial .title-wrapper", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })
            .from(".testimony", {
                opacity: 0,
                x: -100,
                duration: 1,
                stagger: 0.2,
            }, 0.5)
            .from("#testi-img", {
                scale: 0.5,
                opacity: 0,
                duration: 1,
            }, 0.5)
            .from(".testimonial-detail .text", {
                scale: 0.5,
                opacity: 0,
                duration: 1,
            }, 1)

        // ************************************** Call to action Section animation *****************************************

        gsap.from("#Call-to-action .container", {
            scrollTrigger: {
                trigger: "#Call-to-action",
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
            scale: 0.5,
            opacity: 0,
            duration: 1,
        })

        // ************************************** Advantages Section animation *****************************************

        gsap.timeline({
            scrollTrigger: {
                trigger: "#advantage",
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        })
            .from("#advantage .title-wrapper", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })
            .from("#advantage-img", {
                opacity: 0,
                scale: 0.5,
                duration: 1,
            }, 0.5)
            .from(".advantage-wrapper", {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                stagger: 0.2,
            }, 0.5)

        // ************************************** FAQs Section animation *****************************************

        gsap.timeline({
            scrollTrigger: {
                trigger: "#faqs",
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        })
            .from("#faqs .title-wrapper", {
                scale: 0.5,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })
            .from(".question", {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                stagger: 0.2,
            }, 0.5)
    })

}

export default animationGsap;