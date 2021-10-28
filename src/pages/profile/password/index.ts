import './password.scss';
import { render } from '../../../utils/render';
import { Templator } from '../../../utils/templator';
import { passwordTempl } from './password.tmpl';
import { Block } from '../../../utils/block';

export class Password extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
  }

  render() {
    const tmpl = new Templator(passwordTempl);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

const password = new Password({});
render('.root', password);
