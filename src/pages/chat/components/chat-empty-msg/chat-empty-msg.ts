import './chat-empty-msg.scss';
import { chatEmptyMsgTempl } from './chat-empty-msg.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { IChatEmptyMsgProps } from './types';

export class ChatEmptyMsg extends Block<IChatEmptyMsgProps> {
  constructor(props: IChatEmptyMsgProps) {
    super('div', props, 'chat-pablic-area_center');
  }

  render() {
    const tmpl = new Templator(chatEmptyMsgTempl);
    const str = tmpl.compile({});
    return str;
  }
}
