document.addEventListener('DOMContentLoaded', function () {
    // AL USAR slidesPerView: 1, SWIPER CAMBIA DE PÁGINA ENTERA Y NO REPITE NINGUNA TARJETA
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, 
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // Lógica para seleccionar las tarjetas dentro de las cuadrículas
    const cardItems = document.querySelectorAll('.card-item');
    const inputVoto = document.getElementById('voto-seleccionado');

    cardItems.forEach(card => {
        card.addEventListener('click', () => {
            cardItems.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            if (inputVoto) {
                inputVoto.value = card.getAttribute('data-voto');
            }
        });
    });
});
