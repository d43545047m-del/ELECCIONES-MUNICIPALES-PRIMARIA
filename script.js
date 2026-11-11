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
            cardItems.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            if (inputVoto) {
                inputVoto.value = card.getAttribute('data-voto');
            }
        });
    });

    // Validación y confirmación del formulario al votar
    const formulario = document.getElementById('formulario-voto');
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            const grado = document.getElementById('grado').value;
            const voto = inputVoto ? inputVoto.value : '';

            if (!grado) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Grado requerido',
                    text: 'Por favor, selecciona tu grado antes de continuar.',
                    confirmButtonColor: '#1e3c72'
                });
                return;
            }

            if (!voto) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Lista no seleccionada',
                    text: 'Por favor, selecciona una lista para confirmar tu voto.',
                    confirmButtonColor: '#1e3c72'
                });
                return;
            }

            Swal.fire({
                title: '¿Confirmar voto?',
                html: `<strong>Grado:</strong> ${grado}<br><strong>Voto:</strong> ${voto}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#1e3c72',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, emitir voto',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Voto registrado!',
                        text: 'Muchas gracias por participar en la elección.',
                        confirmButtonColor: '#1e3c72'
                    }).then(() => {
                        formulario.reset();
                        cardItems.forEach(c => c.classList.remove('selected'));
                        if (inputVoto) inputVoto.value = '';
                        swiper.slideTo(0);
                    });
                }
            });
        });
    }
});
