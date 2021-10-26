import './signin.scss';
import { render } from '../../../utils/render';
import { Templator } from '../../../utils/templator';
import { signinTempl } from './signin.tmpl';
import { Block } from '../../../utils/block';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';

export function handleClick() {
  console.log('btn click');
}

export const login = new Input({
  title: 'Логин',
  name: 'login',
  placeholder: 'Введите логин',
  validationMsg: 'Неверный логин!',
})

export const password = new Input({
  title: 'Пароль',
  name: 'password',
  placeholder: 'Введите пароль',
  validationMsg: 'Неверный пароль!',
})

export const button = new Button({
  text: 'Войти',
  events: {
    click: handleClick,
  },
})

export class Signin extends Block {
  constructor() {
    super(
      'section',
      {
        name: 'Вход',
        login,
        password,
        button,
      },
      'signin'
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setProps({
        name: 'Signin',
      });
    }, 1000);
  }

  render() {
    const tmpl = new Templator(signinTempl);
    const str = tmpl.compile({
      name: this.props.name,
      login: this.props.login.getContent().outerHTML,
      password: this.props.password.getContent().outerHTML,
      button: this.props.button.getContent().outerHTML,
    });
    return str;
  }
}

const signin = new Signin();
render('.root', signin);
