gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".maincontainer"),
  smooth: true,
  smartphone: {
    smooth: true
}
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".maincontainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".maincontainer").style.transform
    ? "transform"
    : "fixed",
});

gsap.from("#heading h1", {
  y: 120,
  ease: "power4.out",
  stagger: {
    amount: 0.3,
  },
  duration: 1,
  opacity: 0,
});

gsap.from("#heading p", {
  opacity: 0,
  stagger: 0.2,
  ease: "Power3.easeOut",
  y: 500,
  duration: 1.5,
});

gsap.from("#heading p", {
  opacity: 0,
  stagger: 0.2,
  ease: "Power3.easeOut",
  y: 500,
  duration: 1.5,
});



ScrollTrigger.create({
  trigger: '#prlx',
  scroller: '.maincontainer',
  start: 'top+=30% 50%',
  end: 'bottom-=40% 50%',
  animation: gsap.to('#prlx', {backgroundSize: '200%'}),
  scrub: 2,
  // markers: true
})

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

