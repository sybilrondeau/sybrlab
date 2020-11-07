import { gsap } from "gsap";

const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const circles = document.querySelectorAll('.navi__btn');
// const contactDiv = document.querySelector(".contact");
// const ctaDiv = document.querySelector(".cta");
// const ctaTitle = document.querySelector(".cta h2");

// custom cursor and clipath on titles

window.addEventListener("mousemove", e => {
	mouseCursor.style.top = (e.pageY) + "px";
	mouseCursor.style.left = (e.pageX) + "px";
});

// hover on links and circles.

const elementsHover = new Array(links, circles);

elementsHover.forEach(elementHover => {
  elementHover.forEach(element => {
    element.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
    })
    element.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
    })
  })
});


// distortion on cta title

// const turbVal = { val: 0.000001 };
// const turb = document.querySelectorAll('#filter-1 feTurbulence')[0];

// const noisyCursor = gsap.timeline({
// 	paused: true,
// 	onUpdate: function() {
//   		turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
// 	}
// })
// .to(turbVal, 0.2, { val: 0.2 })
// .to(turbVal, 0.2, { val: 0.000001 });

// ctaTitle.addEventListener('mouseover', () => {
//   noisyCursor.restart();
//   mouseCursor.classList.add("filter-effect");
// });

// ctaTitle.addEventListener('mouseleave', () => {
//   mouseCursor.classList.remove("filter-effect");
// });



