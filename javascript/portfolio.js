import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const animSlides = gsap.timeline();

// animSlides.addLabel("pic1")
// 		.from(".portfolio__picture--02", {yPercent: 100})
// 		.addLabel("pic2")
// 		.from(".portfolio__picture--03", {yPercent: 100})
// 		.addLabel("pic3");

// ScrollTrigger.create({
// 	animation: animSlides,
// 	trigger: ".portfolio",
// 	start: "top top",
// 	end: "+=100%",
// 	scrub: 1,
// 	pin: true,
// 	snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"},
// 	toggleClass: {targets:".nav-right li .nav-quoi", className: "active"},
// });

// const animText = gsap.timeline();

// animText.to(".slideText--01", {opacity: 0})
// 		.from(".slideText--02", {yPercent: -30, opacity: 0})
// 		.to(".slideText--02", {opacity: 0})
// 		.from(".slideText--03", {yPercent: -30, opacity: 0});
	

// ScrollTrigger.create({
// 	animation: animText,
// 	trigger: ".portfolio",
// 	start: "top top",
// 	end: "+=120%",
// 	scrub: 1,
// 	pin: true,
// });



const animTL = gsap.timeline({
	scrollTrigger: {
		trigger: ".portfolio",
		start: "top top",
		end: "+=100%",
		scrub: 1,
		pin: true,
		pinSpacing: false,
		snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"},
		toggleClass: {targets:".nav-right li .nav-quoi", className: "active"},

	}
})

.add("pic1")
.from(".portfolio__picture--02", {yPercent: 100}, "pic1")
.to(".slideText--01", {opacity: 0}, "pic1")
.from(".slideText--02", {yPercent: -30, opacity: 0}, "pic1")

.add("pic2")
.from(".portfolio__picture--03", {yPercent: 100}, "pic2")
.to(".slideText--02", {opacity: 0}, "pic2")
.from(".slideText--03", {yPercent: -30, opacity: 0}, "pic2")

.add("pic3")
.to(".slideText--03", {opacity: 0}, "pic3")

.add("end")
