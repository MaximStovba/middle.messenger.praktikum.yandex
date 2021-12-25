import "./send-msg-input.scss";
import { sendMsgInputTempl } from "./send-msg-input.tmpl";

import { Templator } from "../../utils/templator";
import { Block } from "../../utils/block";

export class sendMsgInput extends Block {
  constructor(props: Record<string, any>) {
    super("div", props, "send-msg-input-block");
  }

  render() {
    const internalId = this.getInternalID();
    const tmpl = new Templator(sendMsgInputTempl);
    const str = tmpl.compile({
      internalId,
      name: this.props.name,
      value: this.props.value,
      id: this.props.id,
      type: this.props.type,
      placeholder: this.props.placeholder,
      validationMsg: this.props.validationMsg
    });
    return str;
  }
}
