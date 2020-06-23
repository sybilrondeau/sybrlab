import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { scrollTrigger } from "gsap/scrollTrigger";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathHelper);
gsap.registerPlugin(ScrollTrigger);

gsap.to("#plane", { 
	scrollTrigger: {
		trigger: ".cta",
		start: "top top",
		toggleActions: "play none none reset",
	},
  	motionPath: {
    path: "M-13.36718,43.37237 C-13.36718,74.26537 289.94722,335.26606 400.14822,324.09406 620.78122,301.72506 568.85722,117.57906 708.84722,54.84206 743.72372,39.20456 979.95041,4.44869 1210.10941,8.91669 1440.26541,13.38769 1734.91541,142.68269 1751.76141,141.65669 ",
    autoRotate: true, 
    alignOrigin: [0.5, 0.5],
    ease: "power2.Out",
    }, 
  duration: 5,
  delay: 1,
  opacity: 0
});

// MotionPathHelper.create("#plane");
