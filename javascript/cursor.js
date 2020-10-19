import { gsap } from "gsap";

const mouseCursor = document.querySelector(".cursor");
const titles = document.querySelectorAll(".marquee");
const links = document.querySelectorAll("a");
const contactDiv = document.querySelector(".contact");
const ctaDiv = document.querySelector(".cta");
const ctaTitle = document.querySelector(".cta h2");

// custom cursor and clipath on titles

window.addEventListener("mousemove", e => {
	mouseCursor.style.top = (e.pageY) + "px";
	mouseCursor.style.left = (e.pageX) + "px";
});


// effect on links

links.forEach(link => {
	link.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("link-grow");
	})
	link.addEventListener("mouseover", () => {
		mouseCursor.classList.add("link-grow");
	})
});

// distortion on cta title

const turbVal = { val: 0.000001 };
const turb = document.querySelectorAll('#filter-1 feTurbulence')[0];

const noisyCursor = gsap.timeline({
	paused: true,
	onUpdate: function() {
  		turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
	}
})
.to(turbVal, 0.2, { val: 0.2 })
.to(turbVal, 0.2, { val: 0.000001 });

ctaTitle.addEventListener('mouseover', () => {
  noisyCursor.restart();
  mouseCursor.classList.add("filter-effect");
});

ctaTitle.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove("filter-effect");
});



