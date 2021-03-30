$(function () {

  const modal = {
    selectors: {
      modal: '.js-modal',
      exitBtn: '.js-modal-exit-btn',
      modalBackground: '.js-modal-background',
    },
  };

  // Elements
  const exitBtn = $(modal.selectors.exitBtn);
  const modalBackground = $(modal.selectors.modalBackground);

  // Event Listeners
  exitBtn.on('click', (e) => exitModal(e));
  modalBackground.on('click', (e) => exitModal(e));

  // Functions
  const exitModal = (e) => {
    const currentModal = $(e.target).closest(modal.selectors.modal);
    // Remove class with prefix 'modal--active-'
    currentModal.removeClass(function (index, className) {
      return className.match(/\bm-modal--active-\w*\b/gi || []).join(' ');
    })
  }

});