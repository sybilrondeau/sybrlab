const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".body-link");
const circles = document.querySelectorAll('.info__btn');
const infogs = document.querySelectorAll('.info');

// custom cursor
window.addEventListener("mousemove", e => {
	mouseCursor.style.top = (e.pageY) + "px";
	mouseCursor.style.left = (e.pageX) + "px";
});

// hover on links and circles.
// const elementsHover = new Array(links, circles);

// elementsHover.forEach(elementHover => {
  links.forEach(element => {
    console.log(element.parentElement);
    element.addEventListener("mouseleave", (e) => {
      mouseCursor.classList.remove("link-grow");
    });
    element.addEventListener("mouseover", (e) => {
      mouseCursor.classList.add("link-grow");
    });
  })
// });

// cursor transparent on infogs.

infogs.forEach(infog => {
  infog.addEventListener("mouseleave", (e) => {
    mouseCursor.style.zIndex = "-20";
    mouseCursor.classList.remove("info-grow");
  });
  infog.addEventListener("mouseover", (e) => {
    mouseCursor.style.zIndex = "30";
    mouseCursor.classList.add("info-grow");
  });
});
