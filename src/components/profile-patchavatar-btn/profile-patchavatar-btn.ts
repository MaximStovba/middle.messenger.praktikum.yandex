import './profile-patchavatar-btn.scss';
import { IProfilePatchavatarBtnProps } from './types';
import { profilePatchavatarBtnTempl } from './profile-patchavatar-btn.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class ProfilePatchavatarButton extends Block<IProfilePatchavatarBtnProps> {
  constructor(props: IProfilePatchavatarBtnProps) {
    super('button', props, 'profile__patchavatar-btn');
  }

  render() {
    const tmpl = new Templator(profilePatchavatarBtnTempl);
    const str = tmpl.compile({});
    return str;
  }
}
