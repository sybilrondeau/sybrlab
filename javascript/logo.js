import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("#dot");


const tl = gsap.timeline({defaults: {duration: .8}});

tl.to("#s", { delay: 1, morphSVG: "#l"})
tl.to("#y", { morphSVG: "#a"}, "<")
tl.to("#r", { morphSVG: "#dot"}, "<" )
tl.to("#bottom-circle", { opacity: 0}, "<")
tl.to("#top-circle", { opacity: 0}, "<")
tl.to("#r", { scale: .5}, ">" )
tl.to("#r", { y: 100, ease: "bounce.out", duration: 2}, "<" )
tl.to("#r", { x: -10}, ">")
tl.to("#r", {attr: {fill: "var(--grey-medium)"}, duration: .1}, ">")
tl.to("#r", {x: 110}, ">")
tl.to("#s", {morphSVG: "#l2"}, "<")
tl.to("#y", {morphSVG: "#a2"}, "<")
tl.to("#b", {x: 70}, "<")
tl.to("#logosybr", { opacity: 0, delay: 1}, ">")
tl.from(".header__title h1", { opacity: 0, scale: .8, delay: .2}, ">")