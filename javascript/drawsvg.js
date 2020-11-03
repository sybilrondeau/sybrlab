import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// draw portrait at page load
gsap.from(".draw-portrait", { duration: 6, drawSVG: "50% 50%" });

// draw camera when visible on page
gsap.from(".draw-camera", {
	scrollTrigger : {
		trigger: ".camera-paragraph",
		start: "top 80%",
		toggleActions: "play none none reset",
    markers: true
	},
	duration: 6,
	drawSVG: "50% 50%"
});
