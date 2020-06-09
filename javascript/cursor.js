const mouseCursor = document.querySelector(".cursor");
const titles = document.querySelectorAll(".title h2 span");
const links = document.querySelectorAll("a");
const imageSybil = document.querySelector(".contact__content");
// const firstTitle = document.querySelector(".header__title");
// const position = firstTitle.getBoundingClientRect();

// custom cursor and clipath on titles

window.addEventListener("mousemove", e => {
	mouseCursor.style.top = (e.pageY-40) + "px";
	mouseCursor.style.left = (e.pageX-40) + "px";
	// firstTitle.style.setProperty('--x', (e.pageX-position.x) + "px");
	// firstTitle.style.setProperty('--y', (e.pageY-position.y) + "px");
});


// console.log(position);
// document.body.onmousemove = function(e) {
// 	mouseCursor.style.left = (e.clientX) +'px';
//   	mouseCursor.style.top = (e.clientY) +'px';
// 	firstTitle.style.setProperty('--x', (e.clientX-position.x) + "px");
// 	firstTitle.style.setProperty('--y', (e.clientY-position.y) + "px");
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
