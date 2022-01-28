import './button.scss';
import { IButtonProps } from './types';
import { buttonTempl } from './button.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

const tmpl = new Templator(buttonTempl);

export class Button extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super('button', props, 'popup__btn');
  }

  render() {
    const str = tmpl.compile({
      text: this.props.text,
    });
    return str;
  }
}
