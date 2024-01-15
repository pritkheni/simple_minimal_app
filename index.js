const nvBurger = document.querySelector("nav svg");
document.addEventListener("DOMContentLoaded", function () {
  gsap.set("body", { overflow: "auto" });
  gsap.set("body", { overflowX: "hidden" });
});
nvBurger.addEventListener("click", () => {
  if (nvBurger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  nvBurger.classList.toggle("active");
});

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });
videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    markers: false,
    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});
