import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const naviButtonTop = document.querySelector('.navi__btn--top');
const naviButtonBottom = document.querySelector('.navi__btn--bottom');
const naviP = document.querySelector('.navi__p');
const naviNavLis = document.querySelectorAll('.navi__nav li');
const naviLogo = document.querySelector('.logoLab');
const naviLinks = document.querySelectorAll('.navi__links svg');
const mouseCursor = document.querySelector(".cursor");

MorphSVGPlugin.convertToPath("#circle-top");
const navTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
navTl.to("#circle-top", { morphSVG: "#close-btn-top"} );
navTl.to("#circle-top", {attr: {fill: "#fff"}, duration: .1}, "<")

naviButtonTop.addEventListener('click', (e) => {
  // if (e.currentTarget.parentElement.style.backgroundPosition === "left top") {
  //   e.currentTarget.parentElement.style.animation = "closeBckg 1s forwards";
  //   naviNavLis.forEach(li => li.classList.add('visibleText'));
  //   naviLogo.classList.add('fill-white');
  //   navTl.play();
  // }
  if (!e.currentTarget.parentElement.classList.contains('close')) {
    e.currentTarget.parentElement.classList.remove('open');
    e.currentTarget.parentElement.classList.add('close');
    naviNavLis.forEach(li => { li.classList.add('visibleText'); });
    naviLogo.classList.add('fill-white');
    navTl.play();
  } else {
    e.currentTarget.parentElement.classList.remove('close');
    naviNavLis.forEach(li => { li.classList.remove('visibleText'); });
    naviLogo.classList.remove('fill-white');
    e.currentTarget.parentElement.classList.add('open');
    navTl.reverse();
  }
});

MorphSVGPlugin.convertToPath("#circle-bottom");
const footTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
footTl.to("#circle-bottom", { morphSVG: "#close-btn-bottom"} );
footTl.to("#circle-bottom", {attr: {fill: "#fff"}, duration: .1}, "<")

naviButtonBottom.addEventListener('click', (e) => {
  if (!e.currentTarget.parentElement.classList.contains('open')) {
    e.currentTarget.parentElement.classList.remove('close');
    e.currentTarget.parentElement.classList.add('open');
    naviP.classList.add('visibleText');
    naviLinks.forEach(naviLink => naviLink.classList.add('fill-white'));
    footTl.play();
  } else {
    e.currentTarget.parentElement.classList.remove('open');
    naviP.classList.remove('visibleText');
    naviLinks.forEach(naviLink => naviLink.classList.remove('fill-white'));
    e.currentTarget.parentElement.classList.add('close');
    footTl.reverse();
  }
});

