const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 32,
  
    slideNext: {
      runCallbacks: true,
    },
  
    pagination: false,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },

    autoHeight: true,

    breakpoints: {

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 25
        },

        875: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 32
        }
    }
  });
