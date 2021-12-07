import './chat-card-list.scss';
import { chatCardListTempl } from './chat-card-list.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { ChatCard } from '../chat-card/chat-card';

export class ChatCardList extends Block {
  constructor() {
    super('div', {
      chats: [],
    });
  }

  render() {
    const chats = this.props.chats;

    let chatsList: any = [];

    if (chats.length > 0) {
      chatsList = chats.reduce((acc: string[], chat: any, index: number) => {
        const chatCard = new ChatCard(chat);
        acc[index] =
          chatCard.getContentAsString() + '<hr class="chat-separator" />';
        return acc;
      }, []);
    }

    const tmpl = new Templator(chatCardListTempl);
    const str = tmpl.compile({
      chatCardList: chatsList.join(''),
    });
    return str;
  }
}
