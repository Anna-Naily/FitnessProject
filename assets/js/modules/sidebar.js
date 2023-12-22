const ELEMENTS_SELECTOR = {
  open: '[data-open-menu]',
  close: '[data-close-menu]'
};

const CLASSES = {
  opened: 'sidebar__active',
  activeBack: 'combination__wrapper-sidebar--active',
  blockScroll: 'page--block-scroll'
};

export default function () {
  $(document).on('click', ELEMENTS_SELECTOR.open, function () {
    $('[data-menu=menu]').addClass(CLASSES.opened);
    $('[data-page=page]').addClass(CLASSES.blockScroll);
    $('[data-background=menu]').addClass(CLASSES.activeBack);
  });

  $(document).on('click', ELEMENTS_SELECTOR.close, function () {
    $('[data-menu=menu]').removeClass(CLASSES.opened);
    $('[data-background=menu]').removeClass(CLASSES.activeBack);
    $('[data-page=page]').removeClass(CLASSES.blockScroll);
  });
}
