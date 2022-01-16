import './button.scss';
import { buttonTempl } from './button.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

const tmpl = new Templator(buttonTempl);

export class Button extends Block {
  constructor(props: Record<string, any>) {
    super('button', props, 'popup__btn');
  }

  render() {
    const str = tmpl.compile({
      text: this.props.text,
    });
    return str;
  }
}
