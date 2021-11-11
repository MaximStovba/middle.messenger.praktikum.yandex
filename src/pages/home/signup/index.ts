import './signup.scss';
import { Templator } from '../../../utils/templator';
import { signupTempl } from './signup.tmpl';
import { Block } from '../../../utils/block';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import { inputValidation } from '../../../utils/validator';
import { AuthController } from '../../../controllers/auth';

const auth = new AuthController();

function handleButtonClick(event: Event) {
  auth.registration(event);
}

const firstName = new Input({
  title: 'Имя',
  name: 'first_name',
  id: 'input-first-name',
  type: 'text',
  placeholder: 'Введите имя',
  validationMsg: 'Не верный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const secondName = new Input({
  title: 'Фамилия',
  name: 'second_name',
  id: 'input-second-name',
  type: 'text',
  placeholder: 'Введите фамилию',
  validationMsg: 'Не верный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const login = new Input({
  title: 'Логин',
  name: 'login',
  id: 'input-login',
  type: 'text',
  placeholder: 'Введите логин',
  validationMsg: 'Не верный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const email = new Input({
  title: 'Почта',
  name: 'email',
  id: 'input-email',
  type: 'email',
  placeholder: 'Введите email',
  validationMsg: 'Не верный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const password = new Input({
  title: 'Пароль',
  name: 'password',
  id: 'input-password',
  type: 'password',
  placeholder: 'Введите пароль',
  validationMsg: 'Не верный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const phone = new Input({
  title: 'Телефон',
  name: 'phone',
  id: 'input-phone',
  type: 'phone',
  placeholder: 'Введите телефон',
  validationMsg: 'Не верный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const button = new Button({
  text: 'Регистрация',
  settings: { withInternalID: true },
  events: {
    click: handleButtonClick,
  },
});

export class Signup extends Block {
  constructor() {
    super(
      'section',
      {
        name: 'Регистрация',
        firstName,
        secondName,
        login,
        email,
        password,
        phone,
        button,
      },
      'signup'
    );
  }

  render() {
    const tmpl = new Templator(signupTempl);
    const str = tmpl.compile({
      name: this.props.name,
      firstName: this.props.firstName.getContentAsString(),
      secondName: this.props.secondName.getContentAsString(),
      login: this.props.login.getContentAsString(),
      email: this.props.email.getContentAsString(),
      password: this.props.password.getContentAsString(),
      phone: this.props.phone.getContentAsString(),
      button: this.props.button.getContentAsString(),
    });
    return str.firstChild;
  }
}
