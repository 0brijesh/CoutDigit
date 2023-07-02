// START WINDOW SCROLL
const htmlElement = document.querySelector("html");
const links = document.querySelector(".header");
const linksHeight = links.offsetHeight;
const navLinkList = document.querySelectorAll(".nav-link");
const scrollTrackElementList = document.querySelectorAll(".scroll-track");

window.addEventListener("scroll", () => {
  let fixedHeaderElement = document.getElementById("fixed-header");
  let backToTopButton = document.getElementById("back-to-top");

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    backToTopButton.classList.add("back-top-top-show");
    fixedHeaderElement.classList.add("header-scoll-visible");
  } else {
    backToTopButton.classList.remove("back-top-top-show");
    fixedHeaderElement.classList.remove("header-scoll-visible");
  }

  scrollTrackElementList.forEach((scrollTrackElement) => {
    const currentElementOffset = scrollTrackElement.offsetTop;
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentElementOffset <= scrollPosition + linksHeight) {
      navLinkList.forEach((currentLink) => {
        currentLink.classList.remove("active");
      });
      const id = scrollTrackElement.getAttribute("id");
      document.querySelector(`a[href="#${id}"]`).classList.add("active");
    }
  });
});
// END WINDOW SCROLL

// START MENU TOGGLE
document.getElementById("menu-toggle").addEventListener("click", () => {
  htmlElement.classList.toggle("show-header");
});
// END MENU TOGGLE

// START BACK TO TOP
document.getElementById("back-to-top").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});
// END BACK TO TOP

// START SMOOTH SCROLL JS
document.getElementById("nav-bar").addEventListener("click", (event) => {
  event.preventDefault();
  htmlElement.classList.remove("show-header");
  document.getElementById("menu-toggle").checked = false;
  navLinkList.forEach((navElement) => {
    navElement.classList.remove("active");
  });
  const href = event.target.getAttribute("href");
  document.querySelector(`a[href="${href}"]`).classList.add("active");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({ top: offsetTop - linksHeight, behavior: "smooth" });
});
//  END SMOOTH SCROLL JS
// START COUNTING NUMBER JS
// Just added bootstrap v4.5 css
// You don't need any other library to run this counter
const animationDuration = 3000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;

    const progress = easeOutQuad(frame / totalFrames);

    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");
countupEls.forEach(animateCountUp);

// END COUNTING NUMBER JS
// START SWIPER JS
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// END SWIPER JS