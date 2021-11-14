import "./profile-button-back.scss";
import { profileBtnBackTempl } from "./profile-button-back.tmpl";

import { Templator } from "../../utils/templator";
import { Block } from "../../utils/block";

export class ProfileButtonBack extends Block {
  constructor(props: Record<string, any>) {
    super("button", props, "profile_btn-back");
  }

  render() {
    const tmpl = new Templator(profileBtnBackTempl);
    const str = tmpl.compile({
      text: this.props.text
    });
    return str;
  }
}
