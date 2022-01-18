import './chat-delete-btn.scss';
import { chatDeleteBtnTempl } from './chat-delete-btn.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { IChatDeleteBtnProps } from './types';

export class ChatDeleteButton extends Block<IChatDeleteBtnProps> {
  constructor(props: IChatDeleteBtnProps) {
    super('button', props, 'chat-delete-btn');
  }

  render() {
    const tmpl = new Templator(chatDeleteBtnTempl);
    const str = tmpl.compile({});
    return str;
  }
}
