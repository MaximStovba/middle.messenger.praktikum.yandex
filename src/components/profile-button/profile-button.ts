import "./profile-button.scss";
import { IProfileButtonProps } from './types';
import { profileBtnTempl } from "./profile-button.tmpl";

import { Templator } from "../../utils/templator";
import { Block } from "../../utils/block";

export class ProfileButton extends Block<IProfileButtonProps> {
  constructor(props: IProfileButtonProps) {
    super("button", props, "profile__btn");
  }

  render() {
    const tmpl = new Templator(profileBtnTempl);
    const str = tmpl.compile({
      text: this.props.text
    });
    return str;
  }
}
