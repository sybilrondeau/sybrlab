import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact .contact__infos", {
	scrollTrigger: { 
		trigger: ".contact__content", 
		start: "bottom 90%",
		end: "20% top",
		toggleActions: "play none none reset"
	},
	yPercent: 30, 
	opacity: 0,
	duration: 3,
});