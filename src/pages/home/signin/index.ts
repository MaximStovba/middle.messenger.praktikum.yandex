import './signin.scss';
import { render } from '../../../utils/render';
import { Templator } from '../../../utils/templator';
import { signinTempl } from './signin.tmpl';
import { Block } from '../../../utils/block';
import { button } from '../../../components/button/button';
import { Input } from '../../../components/input/input';

function click() {
  console.log('Click');
}

class Signin extends Block {
  constructor(props: {} | undefined) {
    super("section", props, "signin");
  }

  render() {
    const tmpl = new Templator(signinTempl);

    const str = tmpl.compile({
      name: this.props.name,
      login: this.props.login.render(),
      password: this.props.password.render(),
      button: this.props.button.render(),
    });

    return str;
  }
}

const signin = new Signin({
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
  // button: new Button({
  //   text: 'Click me!',
  //   events: {
  //     click: handleClick,
  //   },
  // }),
  button,
});

render(".root", signin);

button.setProps({
  events: {
    click: click,
  },
})

setTimeout(() => {
  signin.setProps({
    name: 'Нужна регистрация',
  });
}, 1000);
