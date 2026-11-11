document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Swiper de modo que NUNCA repita tarjetas
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Considera toda la vista de 3 tarjetas como 1 sola página
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // Lógica para seleccionar las tarjetas al hacer clic
    const cardItems = document.querySelectorAll('.card-item, .swiper-slide');
    const inputVoto = document.getElementById('voto-seleccionado');

    cardItems.forEach(card => {
        card.addEventListener('click', () => {
            cardItems.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            const votoValue = card.getAttribute('data-voto');
            if (votoValue && inputVoto) {
                inputVoto.value = votoValue;
            }
        });
    });
});
