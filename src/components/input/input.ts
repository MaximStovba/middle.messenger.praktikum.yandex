import './input.scss';
import { IInputProps } from './types';
import { inputTempl } from './input.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class Input extends Block<IInputProps> {
  constructor(props: IInputProps) {
    super('div', props, 'popup__input');
  }

  render() {
    const internalId = this.getInternalID();
    const tmpl = new Templator(inputTempl);
    const str = tmpl.compile({
      internalId,
      title: this.props.title,
      name: this.props.name,
      id: this.props.id,
      type: this.props.type,
      placeholder: this.props.placeholder,
      validationMsg: this.props.validationMsg,
    });
    return str;
  }
}
