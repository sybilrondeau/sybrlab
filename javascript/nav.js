import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
	trigger: "#section1",
	start: "-50% top",
	end: "bottom top", 
	toggleClass: {targets:".nav__middle li .nav-formules", className: "active"}
});

ScrollTrigger.create({
	trigger: "#section3",
	start: "top top",
	end: "150% top", 
	// markers: true,
	toggleClass: {targets:".nav__middle li .nav-a-propos", className: "active"}
});

ScrollTrigger.create({
	trigger: "#section4",
	start: "80% top",
	end: "150% top",
	// markers: true, 
	toggleClass: {targets:".nav__middle li .nav-contact", className: "active"}
});

