import './chat-card.scss';
import { chatCardTempl } from './chat-card.tmpl';
import profileWithoutPhoto from '../../../../../static/img/chat-without-pfoto.svg';
import profileWithoutPhotoActive from '../../../../../static/img/chat-without-pfoto-active.svg';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class ChatCard extends Block {
  constructor(props: Record<string, any>) {
    super('div', props, 'chat-user-card');
  }

  render() {
    const tmpl = new Templator(chatCardTempl);
    const str = tmpl.compile({
      cardId: this.props.id,
      title: this.props.title,
      lastMsg: this.props.last_message ? this.props.last_message.content : '',
      msgTime: this.props.last_message ? this.props.last_message.time : '',
      msgNum: this.props.unread_count,
      urlAvatar: this.props.isChatActive
        ? profileWithoutPhotoActive
        : profileWithoutPhoto,
      delChatButton: this.props.chatDeleteButton.getContentAsString(),
    });
    return str;
  }
}
