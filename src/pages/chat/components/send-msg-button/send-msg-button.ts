import "./send-msg-button.scss";
import { sendMsgBtnTempl } from "./send-msg-button.tmpl";

import { Templator } from "../../../../utils/templator";
import { Block } from "../../../../utils/block";

export class SendMsgButton extends Block {
  constructor(props: Record<string, any>) {
    super("button", props, "send-msg-btn");
  }

  render() {
    const tmpl = new Templator(sendMsgBtnTempl);
    const str = tmpl.compile({
      text: this.props.text
    });
    return str;
  }
}
