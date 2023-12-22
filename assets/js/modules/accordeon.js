const ELEMENTS_SELECTOR = {
  accordeon: '[data-accordeon]',
  button: '[data-accordeon-toggle]',
  content: '[data-accordeon-content]'
};

export default function () {
  $(document).on('click', ELEMENTS_SELECTOR.button, function () {
    const parent = $(this).closest(ELEMENTS_SELECTOR.accordeon);
    const content = parent.find(ELEMENTS_SELECTOR.content);

    parent.toggleClass('accordeon__item--opened');
    content.slideToggle();
  });
}
