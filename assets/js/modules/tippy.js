import tippy from 'tippy.js';

export default function () {
  tippy('[data-tippy-content]', {
    placement: 'top',
    arrow: false,
    animation: 'perspective',
    theme: 'help',
    duration: 500,
    delay: 50
  });
}
