const swiper = new Swiper('.swiper-container', {
    // Muestra 3 tarjetas completas por vista en pantallas grandes
    slidesPerView: 3,
    spaceBetween: 20, // Espacio en píxeles entre cada tarjeta
    slidesPerGroup: 3, // Avanza de 3 en 3 al deslizar

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Configuración para pantallas más pequeñas (celulares y tablets)
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
        }
    }
});
