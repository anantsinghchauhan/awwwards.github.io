gsap.utils.toArray('.grid3').forEach(val => {
    ScrollTrigger.create({
        trigger: val ,
        pin: true,
        start: "top 70px",
        end: "+=150%"
    })
})