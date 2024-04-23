var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1number, .line h2", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1number h5");
    var change = 0;
    setInterval(function () {
      if (change < 100) {
        h5timer.innerHTML = change++;
      } else {
        h5timer.innerHTML = change;
      }
    }, 30);
  },
});
tl.to(".line h2", {
  animationName: "now",
  opacity: 1,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.6,
  delay: 3.2,
});
tl.from("#section1", {
  delay: 0.2,
  duration: 0.4,
  y: 1600,
  opacity: 0,
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
});
