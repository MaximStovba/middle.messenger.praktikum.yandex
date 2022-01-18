import './profile-button-back.scss';
import { IProfileButtonBackProps } from './types';
import { profileBtnBackTempl } from './profile-button-back.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class ProfileButtonBack extends Block<IProfileButtonBackProps> {
  constructor(props: IProfileButtonBackProps) {
    super('button', props, 'profile_btn-back');
  }

  render() {
    const tmpl = new Templator(profileBtnBackTempl);
    const str = tmpl.compile({});
    return str;
  }
}
