import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// animation text paragraphes
const paragraphes = document.querySelectorAll(".paragraph");

paragraphes.forEach(paragraph => {
  const paragraphText = paragraph.querySelector("p");

  const mySplitText = new SplitText(paragraphText, { type: "lines" });

  gsap.from(mySplitText.lines, {
    scrollTrigger: {
      trigger: paragraph,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    stagger: .25,
    y: "4rem",
    opacity: 0,
    duration: 1,
  });
});

// animation portfolio
const portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioItems.forEach(portfolio => {
  const portfolioElements = portfolio.querySelectorAll('.portfolio__item--image, .portfolio__item--title, .portfolio__item--credits, .portfolio__item--description');
  // const portfolioTitle = document.querySelector('.portfolio__item--title');
  // const portfolioCredit = document.querySelector('.portfolio__item--credits');
  // const PortfolioDescription = document.querySelector('.portfolio__item--description');

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
      each: .2,
      grid: "auto",
    }
  });

