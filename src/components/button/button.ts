import './button.scss';
import { buttonTempl } from './button.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from "../../utils/block";

export type Property = Record<string, any>;

export class Button extends Block {
  constructor(props: Property) {
    super("div", props);
  }

  render() {
    const tmpl = new Templator(buttonTempl);
    const str = tmpl.compile({
      text: this.props.text,
    });
    return str;
  }
}
