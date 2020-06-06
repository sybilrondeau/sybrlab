import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animSlides = gsap.timeline();

animSlides.add("pic1")
		.from(".portfolio__picture--02", {yPercent: 100})
		.add("pic2")
		.from(".portfolio__picture--04", {yPercent: 100})
		.add("pic4")

ScrollTrigger.create({
	animation: animSlides,
	trigger: ".portfolio",
	start: "top top",
	end: "+=100%",
	scrub: 1,
	pin: true,
	snap: {snapTo: "labels", duration: {min: 0.2, max: 3}, delay: 0.5, ease: "power2.inOut"}
});

const animText = gsap.timeline();

animText.to(".slideText--01", {opacity: 0})
		.from(".slideText--02", {yPercent: -30, opacity: 0})
		.to(".slideText--02", {opacity: 0})
		.from(".slideText--04", {yPercent: -30, opacity: 0})
	

ScrollTrigger.create({
	animation: animText,
	trigger: ".portfolio",
	start: "top top",
	end: "+=120%",
	scrub: 1,
	pin: true,
});