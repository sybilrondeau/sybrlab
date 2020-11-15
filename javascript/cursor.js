const mouseCursor = document.querySelector(".cursor");

// custom cursor
window.addEventListener("mousemove", e => {
	mouseCursor.style.top = (e.pageY) + "px";
	mouseCursor.style.left = (e.pageX) + "px";
});

// hover on links and circles.
const links = document.querySelectorAll(".body-link");
// elementsHover.forEach(elementHover => {
  links.forEach(element => {
    element.addEventListener("mouseleave", (e) => {
      mouseCursor.classList.remove("link-grow");
    });
    element.addEventListener("mouseover", (e) => {
      mouseCursor.classList.add("link-grow");
    });
  })
// });

// cursor transparent on infogs.
const infogs = document.querySelectorAll('.info');

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

// cursor on menu list
const menuList = document.querySelectorAll('.info__nav li');

menuList.forEach(menuItem => {
  menuItem.addEventListener("mouseleave", (e) => {
    mouseCursor.style.opacity = "1";
  });
  menuItem.addEventListener("mouseover", (e) => {
    mouseCursor.style.opacity = ".4";
  });
});
