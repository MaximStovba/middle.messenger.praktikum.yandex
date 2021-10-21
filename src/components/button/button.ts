import './button.scss';
import { buttonTempl } from './button.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from "../../utils/block";

export class Button extends Block {
  constructor(props: object | undefined) {
    super('div', props);
  }

  render() {
    const tmpl = new Templator(buttonTempl);
    return tmpl.compile({
      text: this.props.text,
    });
  }
}
