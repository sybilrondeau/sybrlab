import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathHelper);

gsap.to("#plane", { 
	scrollTrigger: {
		trigger: ".cta",
		start: "top top",
		toggleActions: "play none none reset",
	},
  	motionPath: {
    path: "M414.52082,395.68537 C414.52082,426.63737 594.56082,727.46437 700.03682,761.13737 850.07982,809.01237 1119.48782,789.90837 1211.19382,726.33737 1303.39582,662.42137 1397.76982,371.43237 1539.93383,270.19935 1678.40682,171.59337 1866.24813,172.29002 1868.91725,172.29002 ",
    autoRotate: true, 
    alignOrigin: [0.5, 0.5],
    ease: "power2.Out",
    }, 
  duration: 5,
  delay: 1,
  opacity: 0
});

//MotionPathHelper.create("#plane");