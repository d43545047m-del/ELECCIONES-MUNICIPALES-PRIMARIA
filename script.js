document.addEventListener('DOMContentLoaded', function () {
    const URL_SCRIPT_GOOGLE = 'https://script.google.com/macros/s/AKfyebyXnxcX_366kgc30jMoUprAmkY0gyXgxuP38VknG57Nc4RS_05iqSlRq7khqS3BTMLeyA/exec';

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, 
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

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

    const formulario = document.getElementById('formulario-voto');
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();

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
                        title: 'Registrando tu voto...',
                        text: 'Por favor espera un momento.',
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });

                    // Preparar datos compatibles con Apps Script
                    const formData = new FormData();
                    formData.append('grado', grado);
                    formData.append('voto', voto);

                    // Envío hacia Google Apps Script
                    fetch(URL_SCRIPT_GOOGLE, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: formData
                    })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: '¡Voto registrado!',
                            text: 'Muchas gracias por participar en la elección.',
                            confirmButtonColor: '#1e3c72'
                        }).then(() => {
                            // Limpiar selección y formulario sin recargar la URL
                            formulario.reset();
                            cardItems.forEach(c => c.classList.remove('selected'));
                            if (inputVoto) inputVoto.value = '';
                            swiper.slideTo(0);
                            
                            // Limpiar parámetros de la URL si aparecieron
                            window.history.replaceState({}, document.title, window.location.pathname);
                        });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al registrar',
                            text: 'Hubo un problema al guardar tu voto. Inténtalo de nuevo.',
                            confirmButtonColor: '#1e3c72'
                        });
                    });
                }
            });
        });
    }
});
