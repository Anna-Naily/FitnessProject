/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import tabs from './modules/tabs';
import sidebar from './modules/sidebar';
import swiper from './modules/swiper';
import select from './modules/select';
import accordeon from './modules/accordeon';
import showMore from './modules/showMore';
import tippy from './modules/tippy';
import validation from './modules/validation';
import inputmask from './modules/inputmask';
import modal from './modules/modal';
import modalSelect from './modules/modalSelect';

const app = {
  ready() {
    // Пример вызова импортированнывх функций
    // pluginName();

    // myModule();
    inputmask();
    tabs();
    sidebar();
    swiper();
    select();
    accordeon();
    showMore();
    tippy();
    validation();
    modal();
    modalSelect();
  },

  load() {},

  resize() {},

  scroll() {}
};

$(() => {
  app.ready();

  $(window)
    .on('load', app.load)
    .on('resize', app.resize)
    .on('scroll', app.scroll);
});
