import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("", {
	scrollTrigger: ".portfolio",
	toggleClass: {targets:".nav-comment", className: ".accent"}
});

