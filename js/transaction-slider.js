const swiper = new Swiper('.swiper-container', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  scrollbar: {
    el: '.scrollbar',
    draggable: true,
  },
});
