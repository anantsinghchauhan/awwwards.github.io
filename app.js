gsap.registerPlugin(ScrollTrigger);

const locoscroll = new LocomotiveScroll({
  el: document.querySelector(".maincontainer"),
  smooth: true,
});

locoscroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".maincontainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".maincontainer").style.transform
    ? "transform"
    : "fixed",
});

gsap.utils.toArray(".grid3").forEach((val) => {
  ScrollTrigger.create({
    trigger: val,
    pin: true,
    start: "top 70px",
    end: "+=150%",
  });
});

gsap.from("#heading h1", {
  opacity: 0,
  stagger: 0.1,
  ease: "Power3.easeOut",
  y: 500,
  duration: 1,
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

// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: ".maincontainer",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".purple",
    scroller: ".maincontainer",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
});

tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  .from(
    ".line-3",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".purple", { backgroundColor: "#28a92b" }, 0);

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
