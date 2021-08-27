/*==================== PRELOADER ====================*/
window.onload = () => {
  document.body.classList.add("loaded-hiding");
  window.setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded-hiding");
  }, 1000);
};

/*==================== MENU SHOW Y HIDDEN ====================*/
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".header__nav");
const navLink = document.querySelectorAll(".header__nav-link");
const body = document.body;

burgerBtn.addEventListener("click", () => {
  if (!burgerBtn.classList.contains("active")) {
    showMenu();
  } else {
    closeMenu();
  }
});

navLink.forEach((element) => {
  element.addEventListener("click", () => {
    closeMenu();
  });
});

function showMenu() {
  let cover = document.createElement("div");
  cover.classList.add("page__cover");
  body.appendChild(cover);
  cover.addEventListener("click", closeMenu);

  burgerBtn.classList.add("active");
  navMenu.classList.add("active");
  document.body.classList.add("scroll-disable");
}

function closeMenu() {
  burgerBtn.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("scroll-disable");
  document.querySelector(".page__cover").remove();
}

/*==================== TESTIMONIALS SLIDER ====================*/
const swiper = new Swiper(".testimonials__slider", {
  // Optional parameters
  loop: true,
  speed: 500,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== PORTFOLIO GALLERY ====================*/
lightGallery(document.getElementById("lightgallery"), {
  easing: "linear",
  speed: 500,
});

/*==================== ANIMATION SCROLL ====================*/
ScrollReveal().reveal(".about__image, .services__image", {
  origin: "left",
  duration: 1250,
  distance: "100%",
  easing: "ease-in-out",
  reset: true,
});

/*==================== SERVICES TABS ====================*/
const tabsSr = document.querySelector(".services__tabs");
const tabContentsSr = document.querySelector(".services__sections");

tabsSr.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("services__tab") &&
    !event.target.classList.contains("active")
  ) {
    const target = event.target.dataset.services;

    tabsSr.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    tabContentsSr.querySelector(".active").classList.remove("active");
    tabContentsSr.querySelector(target).classList.add("active");
  }
});

/*==================== PRICING TABS ====================*/
const tabsPr = document.querySelector(".pricing__tabs");
const tabContentsPr = document.querySelector(".pricing__sections");

tabsPr.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("pricing__tab") &&
    !event.target.classList.contains("active")
  ) {
    const target = event.target.dataset.pricing;

    tabsPr.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    tabContentsPr.querySelector(".active").classList.remove("active");
    tabContentsPr.querySelector(target).classList.add("active");
  }
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scrolltop");

  if (this.scrollY >= 100) {
    scrollTop.classList.remove("hide");
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
    scrollTop.classList.add("hide");
  }
}
window.addEventListener("scroll", scrollTop);
