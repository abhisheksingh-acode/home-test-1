function expand(){
  let navbar = document.querySelector('.navigation');
  let bar = document.querySelector('.bar');
  navbar.classList.toggle('expand');
  bar.classList.toggle('show');

}


//swiper initialize

const swiperMain = new Swiper('.swiperMain', {
   // Optional parameters
   direction: 'vertical',
   mousewheel: true,
   speed:1500,
   spaceBetween:0,
  //  effect: "slide",
  //  coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true
  // },
   loop: true,
   keyboard: {
    enabled: true,
  },
 
   // If we need pagination
   pagination: {
     el: '.mainPagination',
     clickable: true,
     
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });




      const homeSlider = new Swiper('.homeSlider', {
   // Optional parameters
   direction: 'horizontal',
   slidesPerView: 1,
   spaceBetween: 30,
   centeredSlides: true,
   loop: true,
   keyboard: {
    enabled: true,
  },
 
   // If we need pagination
   pagination: {
     el: '.homePagination',
     clickable:true,
   },
   
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });




      const swiper2 = new Swiper('.swiper2', {
   // Optional parameters
   direction: 'horizontal',
   slidesPerView: 1,
   spaceBetween: 30,
   centeredSlides: true,
   loop: true,
   keyboard: {
    enabled: true,
  },
 
   // If we need pagination
   pagination: {
     el: '.portfolioPagination',
     clickable:true,
   },
    
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,

    },
  },
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });






      const mySwiper= new Swiper('.mySwiper', {
   // Optional parameters
   direction: 'horizontal',
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.testimonialPagination',
     clickable: true,
   },
 
   breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,

    },
  },
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });








      const serviceSwiper = new Swiper('.serviceSwiper', {
   // Optional parameters
   direction: 'horizontal',
   slidesPerView: 1,
   spaceBetween: 30,
   centeredSlides: true,
   loop: false,
 
   // If we need pagination
   pagination: {
     el: '.servicePagination',
     clickable: true,
   },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
   centeredSlides: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,

    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: false,

    },
  },
 
   // Navigation arrows
   
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });



//  mouse move Animation

document.body.addEventListener('mousemove',(e)=>{

    var footer = document.querySelector('.footer-bg')
    var card = document.querySelector('#tilt-img') ;

   var clX = e.clientX;
   var clY = e.clientY;

    card.style.transform = `translate(${clX*3/100}px , ${clY*3/100}px)` ;
    footer.style.backgroundPosition = `${clX*3/100}px , ${clY*7/100}px` ;



})