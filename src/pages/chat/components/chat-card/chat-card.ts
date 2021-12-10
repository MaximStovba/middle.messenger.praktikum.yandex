import './chat-card.scss';
import { chatCardTempl } from './chat-card.tmpl';
import { ChatDeleteButton } from '../../../chat/components/chat-delete-btn/chat-delete-btn';
import profileWithoutPhoto from '../../../../../static/img/profile-without-photo.svg';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

function handleDeleteChatButtonClick() {
  console.log('handleDeleteChatButtonClick');
}

const chatDeleteButton = new ChatDeleteButton({
  settings: { withInternalID: true },
  events: {
    click: handleDeleteChatButtonClick,
  },
});

export class ChatCard extends Block {
  constructor(props: Record<string, any>) {
    super('div', { ...props, chatDeleteButton }, 'chat-user-card');
  }

  render() {
    const tmpl = new Templator(chatCardTempl);
    const str = tmpl.compile({
      cardId: this.props.id,
      title: this.props.title,
      lastMsg: this.props.last_message ? this.props.last_message.content : '',
      msgTime: this.props.last_message ? this.props.last_message.time : '',
      msgNum: this.props.unread_count,
      urlAvatar: profileWithoutPhoto,
      delChatButton: this.props.chatDeleteButton.getContentAsString(),
    });
    return str;
  }
}
