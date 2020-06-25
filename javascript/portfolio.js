import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mediaQueryList = window.matchMedia("(min-width: 56.26em)"); // à partir de 900px

function handlePortfolio(mql) {
	if (mql.matches) {

		const animTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".portfolio",
				start: "top top",
				end: "+=100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"},
				toggleClass: {targets:".nav-right li .nav-quoi", className: "active"},
			}
		})

		.add("pic1")
		.from(".slide--02", {yPercent: 100}, "pic1")
		.to(".slideText--01", {opacity: 0}, "pic1")
		.from(".slideText--02", {yPercent: -30, opacity: 0}, "pic1")

		.add("pic2")
		.from(".slide--03", {yPercent: 100}, "pic2")
		.to(".slideText--02", {opacity: 0}, "pic2")
		.from(".slideText--03", {yPercent: -30, opacity: 0}, "pic2")

		.add("end")

	} else {
		const tween1 = gsap.from(".slideText--01", {
		scrollTrigger: { 
		trigger: ".slideText--01", 
		start: "20% 100%",
		end: "+=50%",
		toggleActions: "play none none reset"
		},
		yPercent: 20, 
		opacity: 0,
		duration: 2,
		});
		const tween2 = gsap.from(".slideText--02", {
		scrollTrigger: { 
		trigger: ".slideText--02", 
		start: "20% 100%",
		end: "+=50%",
		toggleActions: "play none none reset"
		},
		yPercent: 20, 
		opacity: 0,
		duration: 2,
		});
		const tween3 = gsap.from(".slideText--03", {
		scrollTrigger: { 
		trigger: ".slideText--03", 
		start: "20% 100%",
		end: "+=50%",
		toggleActions: "play none none reset"
		},
		yPercent: 20, 
		opacity: 0,
		duration: 2,
		});
	}
};

handlePortfolio(mediaQueryList);
mediaQueryList.addEventListener('change', handlePortfolio);

// const slideTexts = gsap.utils.toArray(".slideText");

// // since the tweens alter the inline styles of these elements, we record their state here so that when ScrollTrigger reverts internally (like when switching breakpoints), they get fully reverted with no extra inline styles from tweens. 
// ScrollTrigger.record(".slide--02, .slideText--01, .slideText--02, .slideText--03, .slideText");

// ScrollTrigger.matchMedia({

// 	// desktop
// 	"(min-width: 900px)": function() {
// 		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
// 		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

// 		gsap.timeline({
// 			scrollTrigger: {
// 				trigger: ".portfolio",
// 				start: "top top",
// 				end: "+=100%",
// 				scrub: 1,
// 				pin: true,
// 				pinSpacing: true,
// 				snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"},
// 				toggleClass: {targets:".nav-right li .nav-quoi", className: "active"},
// 			}
// 		})

// 			.add("pic1")
// 			.from(".slide--02", {yPercent: 100}, "pic1")
// 			.to(".slideText--01", {opacity: 0}, "pic1")
// 			.from(".slideText--02", {yPercent: -30, opacity: 0}, "pic1")

// 			.add("pic2")
// 			.from(".slide--03", {yPercent: 100}, "pic2")
// 			.to(".slideText--02", {opacity: 0}, "pic2")
// 			.from(".slideText--03", {yPercent: -30, opacity: 0}, "pic2")

// 			.add("end")
// 	},

// 	// mobile
// 	"(max-width: 899px)": function() {
// 		// The ScrollTriggers created inside these functions are segregated and get
// 		// reverted/killed when the media query doesn't match anymore. 

// 		slideTexts.forEach(slideText => {
// 			gsap.from(slideText, {
// 				scrollTrigger: { 
// 					trigger: slideText, 
// 					start: "20% 100%",
// 					end: "+=50%",
// 					toggleActions: "play none none reset"
// 				},
// 				yPercent: 20, 
// 				opacity: 0,
// 				duration: 2,
// 			});
// 		});
		
// 	},

// 	// all 
// 	"all": function() {
// 		// ScrollTriggers created here aren't associated with a particular media query,
// 		// so they persist.
// 	}
// });






