document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 3,          // Avanza estrictamente de 3 en 3
        slidesPerGroupSkip: 0,      // Evita que el primer elemento ignore el agrupamiento
        spaceBetween: 20,
        
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

    // Lógica para seleccionar una sola lista al hacer clic
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
