import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);

const infoButton = document.querySelector('.info__btn');
const infoP = document.querySelector('.info__p');
const infoNavLis = document.querySelectorAll('.info__nav');
const infoLogo = document.querySelector('.logoLab');
const infoLinks = document.querySelectorAll('.info__links svg');
const mouseCursor = document.querySelector(".cursor");

MorphSVGPlugin.convertToPath(".circle");
const navTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
navTl.to(".circle", { morphSVG: ".close-btn"} );
navTl.to(".circle", {attr: {fill: "var(--primary"}, duration: .1}, "<")

infoButton.addEventListener('click', (e) => {
  if (!e.currentTarget.parentElement.classList.contains('close')) {
    e.currentTarget.parentElement.classList.remove('open');
    e.currentTarget.parentElement.classList.add('close');
    infoNavLis.forEach(li => {
      li.classList.add('openNav');
      li.classList.remove('closeNav');
    });
    navTl.play();
  } else {
    e.currentTarget.parentElement.classList.remove('close');
    infoNavLis.forEach(li => {
      li.classList.add('closeNav');
      li.classList.remove('openNav');
    });
    e.currentTarget.parentElement.classList.add('open');
    navTl.reverse();
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
