gsap.to(".rect", {
    duration: 1,
    x: 100,//animate across the entire svg
    xpercent: -100, //offset by the purple square's width prevent overflowing 
    repeat: -1,
    yoyo: true,
})