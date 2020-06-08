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