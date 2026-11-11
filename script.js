document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del carrusel por páginas completas
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
            // Desmarca cualquier tarjeta previamente seleccionada
            cardItems.forEach(c => c.classList.remove('selected'));
            
            // Marca la tarjeta actual
            card.classList.add('selected');
            
            // Asigna el voto al campo oculto
            inputVoto.value = card.getAttribute('data-voto');
        });
    });
});
