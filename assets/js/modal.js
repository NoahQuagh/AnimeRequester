function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}
function closeModal(modalTarget) {
    const modalOverlay = typeof modalTarget === 'string' ? document.getElementById(modalTarget) : modalTarget;

    if (!modalOverlay) return;

    const modalBox = modalOverlay.querySelector('.modal-box');

    modalOverlay.classList.add('is-closing');
    modalBox.classList.add('is-closing');

    modalBox.addEventListener('animationend', () => {
        modalOverlay.style.display = 'none';

        modalOverlay.classList.remove('is-closing');
        modalBox.classList.remove('is-closing');
    }, { once: true });
}