import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".box", {
	scrollTrigger: { 
		trigger: ".contact--text", 
		start: "20% 80%",
		end: "bottom top",
		toggleActions: "play none none reset"
	},
	yPercent: 30, 
	opacity: 0,
	duration: 3,
	stagger: .1
});