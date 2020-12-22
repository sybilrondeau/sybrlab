const mouseCursor = document.querySelector(".cursor");

// custom cursor
window.addEventListener("mousemove", e => {
	mouseCursor.style.top = (e.pageY) + "px";
	mouseCursor.style.left = (e.pageX) + "px";
});

// hover on links
const links = document.querySelectorAll(".body-link");
links.forEach(element => {
  element.addEventListener("mouseleave", (e) => {
    mouseCursor.classList.remove("link-grow");
  });
  element.addEventListener("mouseover", (e) => {
    mouseCursor.classList.add("link-grow");
  });
})


