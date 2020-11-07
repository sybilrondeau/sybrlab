import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const naviButtons = document.querySelectorAll('.navi__btn');
const naviP = document.querySelector('.navi__p');
const naviLinks = document.querySelector('.navi__links svg');

MorphSVGPlugin.convertToPath("#circle");
const footerTl = gsap.timeline({ defaults: {duration: 1}, paused: true});
footerTl.to("#circle", { morphSVG: "#close-btn"} );
footerTl.to("#circle", {attr: {fill: "#fff"}, duration: .1}, "<")

naviButtons.forEach(naviButton => {
  naviButton.addEventListener('click', (e) => {
    footerTl.reverse();
    if (!e.currentTarget.parentElement.classList.contains('open')) {
      e.currentTarget.parentElement.classList.remove('close');
      e.currentTarget.parentElement.classList.add('open');
      naviP.classList.add('colorWhite');
      footerTl.play();
    } else {
      e.currentTarget.parentElement.classList.remove('open');
      naviP.classList.remove('colorWhite');
      e.currentTarget.parentElement.classList.add('close');
      footerTl.reverse();
    }
  });
})

