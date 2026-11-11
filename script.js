document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        // Evita que Swiper rearrastre la diapositiva previa para llenar huecos
        centerInsufficientSlides: false,
        watchOverflow: true,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
            }
        }
    });

    // Selección de listas al hacer clic
    const slides = document.querySelectorAll('.swiper-slide');
    const inputVoto = document.getElementById('voto-seleccionado');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            slides.forEach(s => s.classList.remove('selected'));
            slide.classList.add('selected');
            inputVoto.value = slide.getAttribute('data-voto');
        });
    });
});
