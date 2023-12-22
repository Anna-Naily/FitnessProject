const ELEMENTS_SELECTOR = {
  modalSelect: '[data-modal-select]'
};

export default function () {
  $(ELEMENTS_SELECTOR.modalSelect).on('change', function () {
    if ($(this).val() == 2) {
      $('#input-email').show();
    } else {
      $('#input-email').hide();
    }
  });
}
