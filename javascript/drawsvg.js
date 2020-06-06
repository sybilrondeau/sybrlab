import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".draw", {duration: 4, drawSVG: "20% 80%"});