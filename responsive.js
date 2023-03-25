import {gsap} from "./node_modules/gsap/index.js"

gsap.to(".rect", {
    duration: 1,
    x: 100,//animate across the entire svg
    xpercent: -100, //offset by the purple square's width prevent overflowing 
    repeat: -1,
    yoyo: true,
})

/***************************************************************/
/***************************************************************/
let parent = document.querySelector('.container')
gsap.defaults({
  duration: 2, ease: "power2.inOut"
})

// animate across a parent. Easy enough, but it doesn't update when the screen size changes
let tween = gsap.to('.green', {
  x: () => parent.clientWidth,
  xPercent: -100
})

// we can update the tween after the page has resized
function callAfterResize(func, delay) {
  let dc = gsap.delayedCall(delay || 0.2, func).pause(),
    handler = () => dc.restart(true);
  window.addEventListener("resize", handler);
  return handler; // in case you want to window.removeEventListener() later
}

// but it feels a bit messy
callAfterResize(() => {
  tween.invalidate().restart().progress(1).pause()
}); 

// A better approach is to put the element in the end position and use a 'from' tween to animate 'from' that transformed position

// avoid FOUC by setting the opacity 0 in CSS. Careful to make sure you're falling back to visible content for users without JS!
// https://greensock.com/fouc/
gsap.set('.blue', {opacity: 1});

gsap.from('.blue', {
  x: () => -1 * parent.clientWidth,
  xPercent: 100
})
/***************************************************************/
/***************************************************************/

