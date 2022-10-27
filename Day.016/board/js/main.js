var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
  },

  speed: 800
});

// 중괄호 안은 객체데이터!!!

// swiper.on('slideChange', function () {
//   console.log('slide changed')
// });


