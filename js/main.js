//sw-visual슬라이드 
// 향수컬렉션

var swiper = new Swiper(".sw-basic", {
    autoplay: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

// 베스트컬렉션

var swiper = new Swiper('.sw-item', {
  // Optional parameters
  autoplay : true,
  spaceBetween : 20,
  slidesPerView: 1,
  // direction: 'horizontal',
  delay : 6000, 
  loop: true,
  disableOnInteraction : false,
  centeredSlides : true ,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar01',
    
  },
});
