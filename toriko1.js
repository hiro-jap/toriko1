gsap.timeline({
    scrollTrigger:{
        trigger:".img1",
        start:"-300 top",
        end:"200 center",
        scrub:1,
        // markers:true,
    }
})
.from(".img1",{xPercent:-100});

// ScrollTrigger.create({
//     trigger:".toriko",
//     start:"top top",
//     end:"+=300px",
//     pin:true,
// });


gsap.timeline({
    scrollTrigger:{
        trigger:".comment1",
        start:"-=50% top",
        end:"300 center",
        scrub:5,
        // markers:true,
    }
})
.from(".comment1",{xPercent:+100});

gsap.timeline({
    scrollTrigger:{
        trigger:".komatu",
        start:"-=50% top",
        end:"300 center",
        scrub:2,
        // markers:true,
    }
})
.from(".komatu",{xPercent:+100});

ScrollTrigger.create({
    trigger:".komatu",
    start:"top top",
    end:"+=300px",
    // pin:true,
});

gsap.timeline({
    scrollTrigger:{
        trigger:".rin",
        start:"-300 top",
        end:"300 center",
        scrub:2,
        // markers:true,
    }
})
.from(".rin",{xPercent:-100});

// gsap.defaults({ease:"none",duration:4});
// gsap.timeline({
//     scrollTrigger:{
//         trigger:".toriko",
//         start:"-100 end",
//         markers:true,
//     }
// })
// .from(".toriko",{xPercent:-100,opacity:0})
// .from(".comment1",{xPercent:100,opacity:0})
//   .from(".komatu",{xPercent:100,opacity:0})
//   .from(".img2",{xPercent:100,opacity:0})
//   .from(".rin",{yPercent:-100,opacity:0});

// ScrollTrigger.create({
//     animation:gsap.timeline(),
//     trigger:".wrapper",
//     start:"top top",
//     end:"+=4000",
//     scrub:true,
//     pin:true,
//     markers:true,
//     anticipatePin:1,
// });




