function loadingAnimation() {
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
    duration: 0.8,
    y: 1600,
    opacity: 0,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });

  var tl = gsap.timeline();
  tl.from("#pleasewait", {
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    delay: 1.5,
  });
  tl.from(".herotext", {
    x: 100,
  });
}
loadingAnimation();

function cursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
}
cursor();

function cursorMagnet() {
  Shery.makeMagnet("#nav2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
cursorMagnet();
