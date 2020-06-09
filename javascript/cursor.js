const mouseCursor = document.querySelector(".cursor");
const titles = document.querySelectorAll(".title h2 span");
const links = document.querySelectorAll("a");
const imageSybil = document.querySelector(".contact__content");
// const firstTitle = document.querySelector(".header__title");


// custom cursor and clipath on titles

window.addEventListener("mousemove", e => {
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";
});


// const p = firstTitle.getBoundingClientRect();
// document.body.onmousemove = function(e) {
// 	firstTitle.style.setProperty('--x', (e.clientX-p.top) + "px");
// 	firstTitle.style.setProperty('--y', (e.clientY-p.left) + "px");
// };


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



//effect on the last div (and picture)

imageSybil.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("image-over");
});
imageSybil.addEventListener("mouseover", () => {
	mouseCursor.classList.add("image-over");
});
