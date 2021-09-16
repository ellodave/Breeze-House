var swiper = new Swiper('.breeze-house-features', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
grabCursor: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.collection-landing-bespoke-gallery', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});
