import './signin.scss';
import '../../../components/input/input.scss';

import { signinTempl } from './signin.tmpl';
import { Templator } from '../../../utils/templator';
import { Block } from '../../../utils/block';
import { Button } from '../../../components/button/button';
import { Input } from '../../../components/input/input';

export class Signin extends Block {
  constructor() {
    super('div', {
      name: 'Вход',
      login: new Input({
        title: 'Логин',
        name: 'login',
        placeholder: 'Введите логин',
        validationMsg: 'Неверный логин!',
      }),
      password: new Input({
        title: 'Пароль',
        name: 'password',
        placeholder: 'Введите пароль',
        validationMsg: 'Неверный пароль!',
      }),
      button: new Button({
        text: 'Войти!',
      }),
    });
  }

  render() {
    const tmpl = new Templator(signinTempl);
    return tmpl.compile({
      pageName: this.props.name,
      login: this.props.login.render(),
      password: this.props.password.render(),
      button: this.props.button.render(),
    });
  }
}

const signin = new Signin();
const content = signin.render();
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = content;
}
