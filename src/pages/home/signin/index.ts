import './signin.scss';
import '../../../components/input/input.scss';

import { signinTempl } from './signin.tmpl';
import { Templator } from '../../../utils/templator';
import { Block } from '../../../utils/block';
import { Button } from '../../../components/button/button';

export class Signin extends Block {
  constructor() {
    super('div', {
      name: 'Вход!)',
      button: new Button({
        text: 'Войти!)',
      }),
    });
  }

  render() {
    const tmpl = new Templator(signinTempl);
    return tmpl.compile({
      pageName: this.props.name,
      button: this.props.button.render(),
    });
  }
}

const signin = new Signin();
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${signin.render()}
`;
}
