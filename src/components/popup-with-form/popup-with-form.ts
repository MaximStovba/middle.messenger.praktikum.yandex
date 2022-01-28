import './popup-with-form.scss';
import { IPopupWithFormProps } from './types';
import { popupWithFormTempl } from './popup-with-form.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class PopupWithForm extends Block<IPopupWithFormProps> {
  constructor(props: IPopupWithFormProps) {
    super('div', props, 'popup');
  }

  render() {
    const tmpl = new Templator(popupWithFormTempl);
    const str = tmpl.compile({
      popupId: this.props.popupId,
      title: this.props.title,
      input: this.props.input,
      button: this.props.button,
    });
    return str;
  }
}
