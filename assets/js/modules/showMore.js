const ELEMENTS_SELECTOR = {
  showMore: '[data-show-more]',
  content: '[data-show-more-content]',
  button: '[data-show-more-toggle]',
  show: '[data-show-more-name]',
  hide: '[data-show-more-hide]',
  icon: '[data-show-more-icon]'
};

export default function () {
  $(document).on('click', ELEMENTS_SELECTOR.button, function () {
    const parent = $(this).closest(ELEMENTS_SELECTOR.showMore);
    const content = parent.find(ELEMENTS_SELECTOR.content);
    const show = parent.find(ELEMENTS_SELECTOR.show);
    const hide = parent.find(ELEMENTS_SELECTOR.hide);
    const icon = parent.find(ELEMENTS_SELECTOR.icon);

    show.toggleClass('show-more__name--invisible');
    hide.toggleClass('show-more__name--invisible');
    icon.toggleClass('show-more__icon--rotate');

    content.toggleClass('invisible');
    content.slideToggle();
  });
}
