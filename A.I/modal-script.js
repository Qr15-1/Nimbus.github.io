const openModalButtons = document.querySelectorAll('[data-open-modal]');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');

// Abrir Modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.openModal; // Obtiene el ID del modal desde data-open-modal
        const modal = document.getElementById(modalId);
        if (modal) {
            // (Opcional) Rellenar campo del plan si existe el data-attribute
            const planName = button.dataset.planName;
            const planInput = modal.querySelector('#modal-plan'); // Busca el input del plan DENTRO del modal
            if (planName && planInput) {
                planInput.value = planName;
            }

            openModal(modal);
        } else {
            console.error("Error: Modal con ID '" + modalId + "' no encontrado.");
        }
    });
});

// Cerrar Modal (Botón 'X' y Overlay)
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encuentra el modal padre más cercano al botón/overlay clickeado
        const modal = button.closest('.modal');
        if (modal) {
            closeModal(modal);
        }
    });
});

// (Opcional) Cerrar Modal con la tecla Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        // Busca si hay algún modal activo
        const activeModal = document.querySelector('.modal.is-active');
        if (activeModal) {
            closeModal(activeModal);
        }
    }
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('is-active');
    // (Opcional) Evitar scroll del body mientras el modal está abierto
    // document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('is-active');
    // (Opcional) Restaurar scroll del body
    // document.body.style.overflow = '';
}

// --- (Opcional) Manejo del envío del formulario del modal ---
const modalForms = document.querySelectorAll('.modal-form');
modalForms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío normal del formulario
        console.log('Formulario del modal enviado (simulado).');
        // Aquí añadirías tu lógica de envío real (AJAX, etc.)
        // Por ejemplo, mostrar un mensaje de éxito y luego cerrar el modal:
        alert('¡Registro confirmado! (Simulación)');
        const modal = form.closest('.modal');
        if (modal) {
            closeModal(modal);
        }
    });
});