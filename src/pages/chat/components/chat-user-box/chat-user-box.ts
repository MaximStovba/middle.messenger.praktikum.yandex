import './chat-user-box.scss';
import { chatUserBoxTempl } from './chat-user-box.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { IChatUserBoxProps } from './types';

const imgUrl =
  'https://www.pinclipart.com/picdir/big/408-4088995_communication-icon-transparent-transparent-communication-clipart-png-download.png';


export class ChatUserBox extends Block<IChatUserBoxProps> {
  constructor(props: IChatUserBoxProps) {
    super('li', props, 'chat-user-box');
  }

  render() {
    const tmpl = new Templator(chatUserBoxTempl);
    const str = tmpl.compile({
      cardId: this.props.id,
      name: this.props.first_name,
      urlAvatar: this.props.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`
        : imgUrl,
      userDeleteButton: this.props.userDeleteButton.getContentAsString(),
    });
    return str;
  }
}
