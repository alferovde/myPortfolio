// export const calc = (a, b) => a + b;
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["&#10094;", "&#10095;"],
  itemElement: "news-item",
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    500: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

let $window = $(window),
  previousScrollTop = 0,
  scrollLock = false;

$window.scroll(function (event) {
  if (scrollLock) {
    $window.scrollTop(previousScrollTop);
  }

  previousScrollTop = $window.scrollTop();
});

let mobileMenu__wrapper = document.querySelector(".mobile-menu__wrapper");
let hamburger = document.querySelector(".hamburger");
let idToggle = document.querySelector("#toggle");

hamburger.addEventListener("click", () => {
  console.log(idToggle.checked);
  if (idToggle.checked) {
    mobileMenu__wrapper.classList.add("animate__bounceOutLeft");
    mobileMenu__wrapper.classList.remove("animate__bounceInLeft");
    setTimeout(() => {
      mobileMenu__wrapper.classList.remove("animate__bounceOutLeft");
      mobileMenu__wrapper.classList.add("hidden");
      scrollLock = false;
    }, 500);
  } else {
    mobileMenu__wrapper.classList.remove("hidden");
    mobileMenu__wrapper.classList.add("animate__bounceInLeft");

    scrollLock = true;
  }
});

window.addEventListener("resize", () => {
  if (window.screen.width > 1000) {
    mobileMenu__wrapper.classList.add("hidden");
    idToggle.checked = false;
    scrollLock = false;
  }
});
