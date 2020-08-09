import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
	trigger: ".formules",
	start: "-50% top",
	end: "bottom top", 
	toggleClass: {targets:".nav__middle li .nav-formules", className: "active"}
});

ScrollTrigger.create({
	trigger: ".portfolio",
	start: "top top",
	end: "bottom top", 
	toggleClass: {targets:".nav__middle li .nav-portfolio", className: "active"}
});

ScrollTrigger.create({
	trigger: ".a-propos",
	start: "top top",
	end: "150% top", 
	toggleClass: {targets:".nav__middle li .nav-a-propos", className: "active"}
});

ScrollTrigger.create({
	trigger: ".cta",
	start: "-50% top",
	end: "120% top", 
	toggleClass: {targets:".nav__middle li .nav-contact", className: "active"}
});

