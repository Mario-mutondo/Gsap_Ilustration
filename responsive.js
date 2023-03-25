import {gsap} from "./node_modules/gsap/index.js"

gsap.to(".rect", {
    duration: 1,
    x: 100,//animate across the entire svg
    xpercent: -100, //offset by the purple square's width prevent overflowing 
    repeat: -1,
    yoyo: true,
})


let parent = document.querySelector(".container")
gsap.defaults({
    duration: 2, 
    ease: "power2.inout",
})

//animate across a parent, easy enought but it does not update when the screen size change 
let tween = gsap.to(".green", {
    x: () => parent.clientWidth,
    xpercent: -100,
})

//we can update the tween after the has resized
function CallAfterResize(func, delay){
    let dc = gsap.delayedcall(delay || 0.2, func).pause(),
    handler = dc.restart(true);
    window.addEventListener("resize", handler);
    return handler; //in case you want to window.removeEventListener later
}

//but it feel a bit messy 
CallAfterResize = ()