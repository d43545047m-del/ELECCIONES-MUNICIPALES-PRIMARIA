document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del carrusel por páginas completas (1 vista por grupo)
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // Lógica para seleccionar las tarjetas dentro de la cuadrícula
    const cardItems = document.querySelectorAll('.card-item');
    const inputVoto = document.getElementById('voto-seleccionado');

    cardItems.forEach(card => {
        card.addEventListener('click', () => {
            // Desmarca cualquier tarjeta seleccionada previamente
            cardItems.forEach(c => c.classList.remove('selected'));
            
            // Marca la tarjeta cliqueada
            card.classList.add('selected');
            
            // Asigna el voto al campo oculto del formulario
            inputVoto.value = card.getAttribute('data-voto');
        });
    });
});
