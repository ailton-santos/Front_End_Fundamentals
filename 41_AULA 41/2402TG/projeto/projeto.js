
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
  })

  window.addEventListener("scroll", function() {
    let texto = document.querySelector('#txt')
    texto.classList.toggle('rotext', window.scrolly > 0)
  })

  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
            }
        });
    });

    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => observer.observe(elemento));
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
            }
        });
    });

    const elementos = document.querySelectorAll('.elemento_');
    elementos.forEach(elemento => observer.observe(elemento));
});

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
    DynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0: {
          SlidesPerView: 1
      },
      768: {
          SlidesPerView: 2
      },
      1024: {
          SlidesPerView: 3
      }
  }
});