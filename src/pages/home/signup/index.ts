import './signup.scss';

import { signupTempl } from './signup.tmpl';
import { Templator } from '../../../utils/templator';
import { Block } from '../../../utils/block';
import { Button } from '../../../components/button/button';

export class Signup extends Block {
  constructor() {
    super('div', {
      name: 'Регистрация!)',
      button: new Button({
        text: 'Зарегистрироваться!)',
      }),
    });
  }

  render() {
    const tmpl = new Templator(signupTempl);
    return tmpl.compile({
      pageName: this.props.name,
      button: this.props.button.render(),
    });
  }
}

const signup = new Signup();
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${signup.render()}
`;
}
