import "./button.scss";
import { buttonTempl } from "./button.tmpl";

import { Templator } from "../../utils/templator";
import { Block } from "../../utils/block";

export class Button extends Block {
  constructor(props: Record<string, any>) {
    super("button", props, "popup__btn");
  }

  render() {
    const tmpl = new Templator(buttonTempl);
    const str = tmpl.compile({
      text: this.props.text
    });
    return str;
  }
}
