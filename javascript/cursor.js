const mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", e => {
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";
});

const links = document.querySelectorAll("a");

links.forEach(link => {
	link.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("link-grow");
	})
	link.addEventListener("mouseover", () => {
		mouseCursor.classList.add("link-grow");
	})
});

const titles = document.querySelectorAll(".title");

titles.forEach(title => {
	title.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("title-highlight");
	})
	title.addEventListener("mouseover", () => {
		mouseCursor.classList.add("title-highlight");
	})
});

const imageSybil = document.querySelector(".contact__content");

imageSybil.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("image-over");
});
imageSybil.addEventListener("mouseover", () => {
	mouseCursor.classList.add("image-over");
});
