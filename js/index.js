function expand() {
  let navbar = document.querySelector(".navigation");
  let bar = document.querySelector(".bar");
  navbar.classList.toggle("expand");
  bar.classList.toggle("show");
}
var element = document.querySelectorAll(".social-fixed");
var code = `<div class="sticky-social">
<ul class="social">
<li class="fb"><a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
<li class="twitter"><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
<li class="whatsapp"><a href="#"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
</ul>
</div>`;

element.forEach((e) => {
  e.innerHTML = code;
});
//swiper initialize

const swiperMain = new Swiper(".swiperMain", {
  // Optional parameters
  direction: "vertical",
  mousewheel: true,
  speed: 1500,
  cssMode: false,
  spaceBetween: 0,
  loop: false,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: ".mainPagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const homeSlider = new Swiper(".homeSlider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: ".homePagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: ".portfolioPagination",
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
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const mySwiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".testimonialPagination",
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const serviceSwiper = new Swiper(".serviceSwiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: false,

  // If we need pagination
  pagination: {
    el: ".servicePagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
    el: ".swiper-scrollbar",
  },
});

//  mouse move Animation

document.body.addEventListener("mousemove", (e) => {
  var footer = document.querySelector(".footer-bg");
  var card = document.querySelector("#tilt-img");

  var clX = e.clientX;
  var clY = e.clientY;

  card.style.transform = `translate(-${(clX * 3) / 100}px , -${
    (clY * 3) / 100
  }px)`;
  footer.style.backgroundPosition = `-${(clX * 2) / 100}px , -${
    (clY * 3) / 100
  }px`;
});

// get back to top function

document.querySelector(".top-btn").addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
