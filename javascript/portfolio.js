import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// .add("pic3")
// .to(".slideText--03", {opacity: 0}, "pic3")

.add("end")
