import './profile-patchavatar-btn.scss';
import { profilePatchavatarBtnTempl } from './profile-patchavatar-btn.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class ProfilePatchavatarButton extends Block {
  constructor(props: Record<string, any>) {
    super('button', props, 'profile__patchavatar-btn');
  }

  render() {
    const tmpl = new Templator(profilePatchavatarBtnTempl);
    const str = tmpl.compile({});
    return str;
  }
}
