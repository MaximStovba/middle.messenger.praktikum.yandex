import './chat-delete-btn.scss';
import { chatDeleteBtnTempl } from './chat-delete-btn.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class ChatDeleteButton extends Block {
  constructor(props: Record<string, any>) {
    super('button', props, 'chat-delete-btn');
  }

  render() {
    const tmpl = new Templator(chatDeleteBtnTempl);
    const str = tmpl.compile({});
    return str;
  }
}
