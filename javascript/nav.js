import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
	trigger: ".formules",
	start: "top bottom",
	end: "bottom top", 
	toggleClass: {targets:".nav-right li .nav-offre", className: "active"}
});

ScrollTrigger.create({
	trigger: ".contact",
	start: "100% bottom",
	end: "300% top", 
	toggleClass: {targets:".nav-right li .nav-contact", className: "active"}
});
