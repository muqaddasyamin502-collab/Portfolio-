(() => {
  const modal = document.getElementById('certificateModal');
  const modalTitle = document.getElementById('certificateModalTitle');
  const modalContent = document.getElementById('certificateModalContent');
  if (!modal || !modalTitle || !modalContent) return;
  const closeModal = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); modalContent.replaceChildren(); document.body.classList.remove('modal-open'); };
  document.querySelectorAll('.certificate-trigger').forEach((card) => card.addEventListener('click', () => {
    const source = card.dataset.certificate;
    modalTitle.textContent = card.dataset.title || 'Certificate';
    const isPdf = source.toLowerCase().endsWith('.pdf');
    const viewer = document.createElement(isPdf ? 'embed' : 'img');
    if (isPdf) { viewer.src = source; viewer.type = 'application/pdf'; } else { viewer.src = source; viewer.alt = modalTitle.textContent; }
    modalContent.replaceChildren(viewer); modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); modal.querySelector('.certificate-modal__close').focus();
  }));
  modal.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });
})();
