const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3, // <- ESTA LÍNEA HACE QUE AVANCE DE 3 EN 3
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
