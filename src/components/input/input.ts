import './input.scss';
import { inputTempl } from './input.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from "../../utils/block";

export class Input extends Block {
  constructor(props: Record<string, string>) {
    super("div", props, "popup__input");
  }

  render() {
    const tmpl = new Templator(inputTempl);
    const str = tmpl.compile({
      title: this.props.title,
      name: this.props.name,
      placeholder: this.props.placeholder,
      validationMsg: this.props.validationMsg,
    });
    return str;
  }
}
