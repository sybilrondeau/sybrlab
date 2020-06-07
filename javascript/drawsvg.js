import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// const svgAnim = gsap.timeline();

// svgAnim.from(".draw", {drawSVG: "20% 80%", duration: 4})
// 		.to(".draw", {autoAlpha: 1, x: -100});

// ScrollTrigger.create({
// 	animation: svgAnim,
// 	trigger: ".draw",
// 	start: "top 80%",
// 	toggleActions: "play none none reset",
// });


gsap.from(".draw", {
	scrollTrigger : {
		trigger: ".draw",
		start: "top 80%",
		toggleActions: "play none none reset",
	},
	duration: 4, 
	drawSVG: "20% 80%"
});