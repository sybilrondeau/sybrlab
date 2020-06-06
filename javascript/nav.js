import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
	trigger: ".formules",
	start: "top bottom",
	end: "bottom top", 
	toggleClass: {targets:".nav-right li .nav-comment", className: "active"}
});

ScrollTrigger.create({
	trigger: ".contact",
	start: "top bottom",
	end: "bottom top", 
	toggleClass: {targets:".nav-right li .nav-qui", className: "active"}
});
