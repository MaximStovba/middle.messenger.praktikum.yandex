import './chat-card-list.scss';
import { chatCardListTempl } from './chat-card-list.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { ChatCard } from '../chat-card/chat-card';
import { Store } from '../../../../utils/store';

const store = new Store();
const appStore = store.getState();

export class ChatCardList extends Block {
  constructor(props: Record<string, any>) {
    super('div', props);
  }

  render() {
    const chats = appStore.chats;

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
