import "./btn-menu-chat.scss";
import { btnMenuChatTempl } from "./btn-menu-chat.tmpl";

import { Templator } from "../../utils/templator";
import { Block } from "../../utils/block";

export class BtnMenuChat extends Block {
  constructor(props: Record<string, any>) {
    super("button", props, "btn-menu-chat");
  }

  render() {
    const tmpl = new Templator(btnMenuChatTempl);
    const str = tmpl.compile({
      text: this.props.text
    });
    return str;
  }
}
