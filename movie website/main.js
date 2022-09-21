var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var swiper = new Swiper(".coming-conatniner", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0:{
        slidesPerview: 2,
      },
      568:{
        slidesPerview:3,
      },
      768:{
        slidesPerview:4,
      },
      968:{
        slidesPerview:5,
      },
    },
    });
