import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slideTexts = gsap.utils.toArray(".slideText");

// since the tweens alter the inline styles of these elements, we record their state here so that when ScrollTrigger reverts internally (like when switching breakpoints), they get fully reverted with no extra inline styles from tweens. 
ScrollTrigger.saveStyles(".slide--02, .slide--03, .slideText--01, .slideText--02, .slideText--03, .slideText");

ScrollTrigger.matchMedia({

	// desktop
	"(min-width: 56.26em)": function() {
		// setup animations and ScrollTriggers for screens over 900px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

		gsap.timeline({
			scrollTrigger: {
				trigger: ".portfolio",
				start: "top top",
				end: "+=100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"},
				toggleClass: {targets:".nav__middle li .nav-portfolio", className: "active"}
			}
		})

			.add("pic1")
			.from(".slide--02", {yPercent: 100}, "pic1")
			.add("pic2")
			.to(".slideText--01", {duration: .05, opacity: 0}, "pic2")
			.from(".slideText--02", {duration: .05, opacity: 0}, "pic2")

			.add("pic3")
			.from(".slide--03", {yPercent: 100}, "pic3")
			.add("end")
			.to(".slideText--02", {duration: .05, opacity: 0}, "end")
			.from(".slideText--03", {duration: .05, opacity: 0}, "end")

	},

	// mobile
	"(max-width: 56.25em)": function() {
		// The ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore. 

		slideTexts.forEach(slideText => {
			gsap.from(slideText, {
				scrollTrigger: { 
					trigger: slideText, 
					start: "20% 100%",
					end: "+=50%",
					toggleActions: "play none none reset"
				},
				yPercent: 20, 
				opacity: 0,
				duration: 2,
			});
		});
		
	},

	// all 
	// "all": function() {
	// 	// ScrollTriggers created here aren't associated with a particular media query,
	// 	// so they persist.
	// }
});
