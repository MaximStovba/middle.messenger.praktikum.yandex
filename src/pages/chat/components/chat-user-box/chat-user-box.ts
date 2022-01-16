import './chat-user-box.scss';
import { chatUserBoxTempl } from './chat-user-box.tmpl';
import profileWithoutPhoto from '../../../../../static/img/profile-without-photo.svg';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class ChatUserBox extends Block {
  constructor(props: Record<string, any>) {
    super('li', props, 'chat-user-box');
  }

  render() {
    const tmpl = new Templator(chatUserBoxTempl);
    const str = tmpl.compile({
      cardId: this.props.id,
      name: this.props.first_name,
      urlAvatar: this.props.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`
        : profileWithoutPhoto,
      userDeleteButton: this.props.userDeleteButton.getContentAsString(),
    });
    return str;
  }
}
