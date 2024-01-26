var swiper = new Swiper(".cateSwiper", {
  slidesPerView: 5,
  spaceBetween: 220,
  loop: true,
  speed: 1000,
  createElements: true,
  enabled: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".slide_btn .right",
    prevEl: ".slide_btb .left",
  },
});
