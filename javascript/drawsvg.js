import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".draw", {
	scrollTrigger : {
		trigger: ".draw",
		start: "top 80%",
		toggleActions: "play none none reset",
	},
	duration: 6,
	drawSVG: "50% 50%"
});

gsap.from(".draw-portrait", {
  scrollTrigger : {
    trigger: ".a-propos__portrait",
    start: "20% 80%",
    toggleActions: "play none none reset",
  },
  duration: 6,
  drawSVG: "50% 50%"
});
