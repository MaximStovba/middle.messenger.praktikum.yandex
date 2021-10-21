import './home.scss';

import { homeTempl } from './home.tmpl';
import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';
import { Button } from '../../components/button/button';

export class Home extends Block {
  constructor() {
    super('div', {
      name: 'Страницы',
      button: new Button({
        text: 'Войти',
      }),
    });
  }

  componentDidMount() {
    this.setProps({
      name: 'Страницы чата',
    });
  }

  render() {
    const tmpl = new Templator(homeTempl);
    return tmpl.compile({
      userName: this.props.name,
      button: this.props.button.render(),
    });
  }
}

const home = new Home();
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${home.render()}
`;
}
