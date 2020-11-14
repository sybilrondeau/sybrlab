const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const circles = document.querySelectorAll('.info__btn');
const infogs = document.querySelectorAll('.info');

// custom cursor
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
    });
    element.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
    });
  })
});

// cursor transparent on infogs.

infogs.forEach(infog => {
  infog.addEventListener("mouseover", (e) => {
    mouseCursor.style.zIndex = "30";
    mouseCursor.style.opacity = ".7";
  });
  infog.addEventListener("mouseleave", (e) => {
    mouseCursor.style.zIndex = "-20";
    mouseCursor.style.opacity = "1";
  });
});
