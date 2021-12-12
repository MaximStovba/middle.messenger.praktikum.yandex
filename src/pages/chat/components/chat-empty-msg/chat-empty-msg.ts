import './chat-empty-msg.scss';
import { chatEmptyMsgTempl } from './chat-empty-msg.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class ChatEmptyMsg extends Block {
  constructor(props: Record<string, any>) {
    super('p', props, 'chat-empty-msg');
  }

  render() {
    const tmpl = new Templator(chatEmptyMsgTempl);
    const str = tmpl.compile({});
    return str;
  }
}
