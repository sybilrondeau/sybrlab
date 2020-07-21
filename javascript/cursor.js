import { gsap } from "gsap";

const mouseCursor = document.querySelector(".cursor");
const titles = document.querySelectorAll(".marquee");
const links = document.querySelectorAll("a");
const contactDiv = document.querySelector(".contact");
const ctaDiv = document.querySelector(".cta");
const ctaTitle = document.querySelector(".cta h3");

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

//effect on titles

titles.forEach(title => {
	title.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("title-highlight");
	})
	title.addEventListener("mouseover", () => {
		mouseCursor.classList.add("title-highlight");
	})
});



//effect on the last two div

contactDiv.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("image-over");
});
contactDiv.addEventListener("mouseover", () => {
	mouseCursor.classList.add("image-over");
});

//filter effect on the last title 

ctaTitle.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("filter-effect");
});
ctaTitle.addEventListener("mouseover", () => {
	mouseCursor.classList.add("filter-effect");
});


// distortion

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

ctaTitle.addEventListener('mouseenter', function() {
  noisyCursor.restart();
});

