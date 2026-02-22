function createModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.style.display = 'none';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';

  closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  modal.appendChild(closeButton);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  return {
    open: () => overlay.style.display = 'block',
    close: () => overlay.style.display = 'none',
    element: overlay
  };
}

module.exports = { createModal };