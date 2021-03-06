import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);

const infoButton = document.querySelector(".info__top--btn");
const infoNav = document.querySelector(".info__nav");

// transformation circle button to cross
MorphSVGPlugin.convertToPath(".circle");
const navTl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
navTl.to(".circle", { morphSVG: ".close-btn" });
navTl.to(".circle", { attr: { fill: "var(--primary" }, duration: 0.1 }, "<");

infoButton.addEventListener("click", (e) => {
  // no need for === here as I know the types !
  if (e.currentTarget.dataset.state == "close") {
    infoNav.classList.remove("closeNav");
    infoNav.classList.add("openNav");
    navTl.play();
    e.currentTarget.dataset.state = "open";
  } else {
    infoNav.classList.remove("openNav");
    infoNav.classList.add("closeNav");
    navTl.reverse();
    e.currentTarget.dataset.state = "close";
  }
});

// class active on menu items
function activeMenu(trigger, end, targets) {
  ScrollTrigger.create({
    trigger: trigger,
    start: "top bottom",
    end: end,
    // markers: true,
    toggleClass: { targets: targets, className: "active" },
  });
}

activeMenu("#section2", "bottom 20%", ".nav-about");
activeMenu("#section3", "bottom 20%", ".nav-portfolio");
activeMenu("#section4", "bottom 20%", ".nav-skills");
activeMenu("#section5", "200% 20%", ".nav-contact");
