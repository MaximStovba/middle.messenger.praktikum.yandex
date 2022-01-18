import './profile-input.scss';
import { IProfileInputProps } from './types';
import { profileInputTempl } from './profile-input.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class ProfileInput extends Block<IProfileInputProps> {
  constructor(props: IProfileInputProps) {
    super('div', props, 'profile__input');
  }

  render() {
    const internalId = this.getInternalID();
    const tmpl = new Templator(profileInputTempl);
    const str = tmpl.compile({
      internalId,
      title: this.props.title,
      name: this.props.name,
      value: this.props.value,
      id: this.props.id,
      type: this.props.type,
      placeholder: this.props.placeholder,
      validationMsg: this.props.validationMsg,
    });
    return str;
  }
}
