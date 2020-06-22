import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mediaQueryList = window.matchMedia("(min-width: 56.26em)"); // à partir de 900px

function handlePortfolio(mql) {
	if (mql.matches) {

		const animTL = gsap.timeline({
			scrollTrigger: {
				trigger: ".portfolio",
				start: "top top",
				end: "+=100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"},
				toggleClass: {targets:".nav-right li .nav-quoi", className: "active"},
			}
		})

		.add("pic1")
		.from(".slide--02", {yPercent: 100}, "pic1")
		.to(".slideText--01", {opacity: 0}, "pic1")
		.from(".slideText--02", {yPercent: -30, opacity: 0}, "pic1")

		.add("pic2")
		.from(".slide--03", {yPercent: 100}, "pic2")
		.to(".slideText--02", {opacity: 0}, "pic2")
		.from(".slideText--03", {yPercent: -30, opacity: 0}, "pic2")

		.add("end")

	} else {
		gsap.from(".slideText--01", {
		scrollTrigger: { 
		trigger: ".slideText--01", 
		start: "20% 100%",
		end: "+=50%",
		toggleActions: "play none none reset"
		},
		yPercent: 20, 
		opacity: 0,
		duration: 2,
		});
		gsap.from(".slideText--02", {
		scrollTrigger: { 
		trigger: ".slideText--02", 
		start: "20% 100%",
		end: "+=50%",
		toggleActions: "play none none reset"
		},
		yPercent: 20, 
		opacity: 0,
		duration: 2,
		});
		gsap.from(".slideText--03", {
		scrollTrigger: { 
		trigger: ".slideText--03", 
		start: "20% 100%",
		end: "+=50%",
		toggleActions: "play none none reset"
		},
		yPercent: 20, 
		opacity: 0,
		duration: 2,
		});
	}
};

handlePortfolio(mediaQueryList);
mediaQueryList.addEventListener('change', handlePortfolio);
