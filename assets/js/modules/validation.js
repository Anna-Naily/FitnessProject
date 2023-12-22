import validation from 'jquery-validation';

const ELEMENTS_SELECTOR = {
  selectBlock: '[data-select]',
  error: '[data-error]',
  control: '[data-select-control]'
};

export default function () {
  $(document).on('click', ELEMENTS_SELECTOR.selectBlock, function () {
    $($(ELEMENTS_SELECTOR.control)).on('select2:close', function (el) {
      $(this).valid();
    });
  });

  $('#editing').validate({
    // errorClass: 'error',

    rules: {
      // simple rule, converted to {required:true}

      // compound rule
      firstname: 'required',
      lastname: 'required',
      // username: {
      //   required: true,
      //   minlength: 2
      // },
      email: {
        required: true,
        email: true
      },
      emailSimple: {
        required: false,
        email: true
      },
      telRequired: 'required',
      selectRequired: 'required',
      selectModal: 'required',
      theme: 'required'
    },
    messages: {
      firstname: 'Имя не указано',
      lastname: 'Фамилия не указана',
      username: {
        required: 'Поле не заполнено',
        minlength: 'Необходимо минимум два символа'
      },
      email: {
        required: 'E-mail не указан',
        email: 'Некорректный E-mail'
      },
      telRequired: 'Телефон не указан',
      selectRequired: 'Специализация не выбрана',
      selectModal: 'Обращение не выбрано',
      theme: 'Тема не указана'
    }
  });

  $('#support-appeal').validate({
    errorClass: 'error',

    rules: {
      name: 'required',
      email: {
        required: true,
        email: true
      },
      selectModal: 'required'
    },
    messages: {
      email: {
        required: 'E-mail не указан',
        email: 'Некорректный E-mail'
      },
      selectModal: 'Обращение не выбрано'
    }
  });

  $('#support-tech').validate({
    errorClass: 'error',

    rules: {
      name: 'required',
      theme: 'required'
    },
    messages: {
      theme: 'Тема не указана'
    }
  });
}
