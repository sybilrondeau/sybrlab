import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);

const infoButton = document.querySelector('.info__top--btn');
const infoNav = document.querySelector('.info__nav');

MorphSVGPlugin.convertToPath(".circle");
const navTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
navTl.to(".circle", { morphSVG: ".close-btn"} );
navTl.to(".circle", {attr: {fill: "var(--primary"}, duration: .1}, "<")

infoButton.addEventListener('click', (e) => {
  if (e.currentTarget.dataset.state === "close") {
    infoNav.classList.remove('closeNav');
    infoNav.classList.add('openNav');
    navTl.play();
    e.currentTarget.dataset.state = "open";
  } else {
    infoNav.classList.remove('openNav');
    infoNav.classList.add('closeNav');
    navTl.reverse();
    e.currentTarget.dataset.state = "close";
  }
});

ScrollTrigger.create({
  trigger: "#section2",
  start: "top bottom",
  end: "bottom 20%",
  // markers: true,
  toggleClass: {targets:".nav-about", className: "active"}
});

ScrollTrigger.create({
  trigger: "#section3",
  start: "top bottom",
  end: "bottom 20%",
  // markers: true,
  toggleClass: {targets:".nav-portfolio", className: "active"}
});

ScrollTrigger.create({
  trigger: "#section4",
  start: "top bottom",
  end: "bottom 20%",
  // markers: true,
  toggleClass: {targets:".nav-skills", className: "active"}
});

ScrollTrigger.create({
  trigger: "#section5",
  start: "top bottom",
  end: "200% 20%",
  // markers: true,
  toggleClass: {targets:".nav-contact", className: "active"}
});
