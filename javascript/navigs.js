import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const infoButtonTop = document.querySelector('.info__btn--top');
const infoButtonBottom = document.querySelector('.info__btn--bottom');
const infoP = document.querySelector('.info__p');
const infoNavLis = document.querySelectorAll('.info__nav li');
const infoLogo = document.querySelector('.logoLab');
const infoLinks = document.querySelectorAll('.info__links svg');
const mouseCursor = document.querySelector(".cursor");

MorphSVGPlugin.convertToPath("#circle-top");
const navTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
navTl.to("#circle-top", { morphSVG: "#close-btn-top"} );
navTl.to("#circle-top", {attr: {fill: "#fff"}, duration: .1}, "<")

infoButtonTop.addEventListener('click', (e) => {
  // if (e.currentTarget.parentElement.style.backgroundPosition === "left top") {
  //   e.currentTarget.parentElement.style.animation = "closeBckg 1s forwards";
  //   infoNavLis.forEach(li => li.classList.add('visibleText'));
  //   infoLogo.classList.add('fill-white');
  //   navTl.play();
  // }
  if (!e.currentTarget.parentElement.classList.contains('close')) {
    e.currentTarget.parentElement.classList.remove('open');
    e.currentTarget.parentElement.classList.add('close');
    infoNavLis.forEach(li => { li.classList.add('visibleText'); });
    infoLogo.classList.add('fill-white');
    navTl.play();
  } else {
    e.currentTarget.parentElement.classList.remove('close');
    infoNavLis.forEach(li => { li.classList.remove('visibleText'); });
    infoLogo.classList.remove('fill-white');
    e.currentTarget.parentElement.classList.add('open');
    navTl.reverse();
  }
});

MorphSVGPlugin.convertToPath("#circle-bottom");
const footTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
footTl.to("#circle-bottom", { morphSVG: "#close-btn-bottom"} );
footTl.to("#circle-bottom", {attr: {fill: "#fff"}, duration: .1}, "<")

infoButtonBottom.addEventListener('click', (e) => {
  if (!e.currentTarget.parentElement.classList.contains('open')) {
    e.currentTarget.parentElement.classList.remove('close');
    e.currentTarget.parentElement.classList.add('open');
    infoP.classList.add('visibleText');
    infoLinks.forEach(infoLink => infoLink.classList.add('fill-white'));
    footTl.play();
  } else {
    e.currentTarget.parentElement.classList.remove('open');
    infoP.classList.remove('visibleText');
    infoLinks.forEach(infoLink => infoLink.classList.remove('fill-white'));
    e.currentTarget.parentElement.classList.add('close');
    footTl.reverse();
  }
});

