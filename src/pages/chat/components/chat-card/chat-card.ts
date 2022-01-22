import './chat-card.scss';
import { chatCardTempl } from './chat-card.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { dateHoursMinutesFormat } from '../../../../utils/time';
import { IChatCardProps } from './types';

const imgUrl =
  'https://www.pinclipart.com/picdir/big/408-4088995_communication-icon-transparent-transparent-communication-clipart-png-download.png';


export class ChatCard extends Block<IChatCardProps> {
  constructor(props: IChatCardProps) {
    super('div', props, 'chat-user-card');
  }

  render() {
    const tmpl = new Templator(chatCardTempl);
    const str = tmpl.compile({
      cardId: this.props.id,
      title: this.props.title,
      lastMsg: this.props.last_message ? this.props.last_message.content : '',
      msgTime: this.props.last_message
        ? dateHoursMinutesFormat(this.props.last_message.time)
        : '',
      msgNum: this.props.unread_count,
      urlAvatar: this.props.isChatActive
        ? imgUrl
        : imgUrl,
      delChatButton: this.props.chatDeleteButton.getContentAsString(),
    });
    return str;
  }
}
