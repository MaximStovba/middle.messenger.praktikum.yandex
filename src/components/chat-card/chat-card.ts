import './chat-card.scss';
import { chatCardTempl } from './chat-card.tmpl';

import { Templator } from '../../utils/templator';
import { Block } from '../../utils/block';

export class ChatCard extends Block {
  constructor(props: Record<string, any>) {
    super('div', props, 'chat-user-card');
  }

  render() {
    const tmpl = new Templator(chatCardTempl);
    const str = tmpl.compile({
      name: this.props.name,
      lastMsg: this.props.lastMsg,
      msgTime: this.props.msgTime,
      msgNum: this.props.msgNum,
    });
    return str;
  }
}
