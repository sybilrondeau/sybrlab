import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function animSections(sectionItems, trigger, stagger) {
  gsap.from(sectionItems, {
  scrollTrigger: {
    trigger: trigger,
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: "4rem",
  opacity: 0,
  duration: 1,
  stagger: stagger,
  });
};

// animation paragraphs about and contact
const paragraphAbout = document.querySelectorAll(".about .paragraph");
const paragraphContact = document.querySelectorAll(".contact .paragraph");

animSections(paragraphAbout, ".about .paragraph", .33);
animSections(paragraphContact, ".contact .paragraph", .33);

// animation portfolio
const portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioItems.forEach(portfolio => {
  const portfolioElements = portfolio.querySelectorAll('.portfolio__item--image, .portfolio__item--title, .portfolio__item--credits, .portfolio__item--description');
  animSections(portfolioElements, portfolio, .25)
});

// animation competence and cta
const competencesItems = document.querySelectorAll('.competences__item');
const ctaItems = document.querySelectorAll('.cta__title, .cta__p, .cta__social');

animSections(competencesItems, ".competences-section", { each: .4, grid: "auto" })
animSections(ctaItems, ".cta__title", .5);
