import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

// draw portrait at page load
gsap.from(".draw-portrait", { duration: 6, drawSVG: "50% 50%" });

// draw svg when visible on page
gsap.from(".draw-svg", {
	scrollTrigger: {
		trigger: ".about .paragraph__title",
		start: "top 80%",
		toggleActions: "play none none reverse"
	},
	duration: 6,
	drawSVG: "50% 50%"
});
