import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// animation paragraphes about
const paragraphAbout = document.querySelectorAll(".about .paragraph");

gsap.from(paragraphAbout, {
  scrollTrigger: {
    trigger: ".about .paragraph__title",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  stagger: .33,
  y: "4rem",
  opacity: 0,
  duration: 1,
});

const paragraphContact = document.querySelectorAll(".contact .paragraph");

gsap.from(paragraphContact, {
  scrollTrigger: {
    trigger: ".contact .paragraph__title",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  stagger: .33,
  y: "4rem",
  opacity: 0,
  duration: 1,
});

//paragraphes.forEach(paragraph => {
//  const paragraphText = paragraph.querySelector("p");
//   const mySplitText = new SplitText(paragraphText, { type: "lines" });
//const paragraphElements = paragraph.querySelectorAll('.paragraph__title', '.paragraph__text');

//   gsap.from(mySplitText.lines, {
//     scrollTrigger: {
//       trigger: paragraph,
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//     stagger: .25,
//     y: "4rem",
//     opacity: 0,
//     duration: 1,
//   });
// });
//});


// animation portfolio
const portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioItems.forEach(portfolio => {
  const portfolioElements = portfolio.querySelectorAll('.portfolio__item--image, .portfolio__item--title, .portfolio__item--credits, .portfolio__item--description');

  gsap.from(portfolioElements, {
    scrollTrigger: {
      trigger: portfolio,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: "4rem",
    opacity: 0,
    duration: 1,
    stagger: .25
  })
});

// animation compétences
const competencesItems = document.querySelectorAll('.competences__item');

gsap.from(competencesItems, {
  scrollTrigger: {
    trigger: ".competences-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: "4rem",
  opacity: 0,
  duration: 1,
  stagger: {
    each: .4,
    grid: "auto",
  }
});

// animation cta
const ctaItems = document.querySelectorAll('.cta__title, .cta__p');

gsap.from(ctaItems, {
  scrollTrigger: {
    trigger: ".cta__title",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: "4rem",
  opacity: 0,
  duration: 1,
  stagger: .5
});
