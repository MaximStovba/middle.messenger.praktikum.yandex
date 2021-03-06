import './chat-card-list.scss';
import { chatCardListTempl } from './chat-card-list.tmpl';
import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { ChatsController } from '../../../../controllers/chats';
import { ChatCard } from '../chat-card/chat-card';
import { ChatDeleteButton } from '../../../chat/components/chat-delete-btn/chat-delete-btn';
import { Store } from '../../../../utils/store';
import { IChatCardListProps } from './types';
import { IChatCardProps } from '../chat-card/types';

const chats = new ChatsController();
const store: Store = new Store();

function handleChatCardClick(event: Event | any) {
  const el = event.target;
  const targetEl = el?.querySelector('.user-card__avatar');
  const chatId = targetEl.getAttribute('data-id');

  store.setState({ currentChat: chatId });
  chats.getChatsUsers(chatId);

  chats.getChatToken(chatId);
}

function handleDeleteChatButtonClick(event: Event | any) {
  const el = event.target;
  const parentEl = el?.closest('div');
  const dataId = parentEl.getAttribute('data-id');

  chats.deleteChat(dataId).then(() => {
    const appStore = store.getState();
    console.log(appStore);
  });
}

export class ChatCardList extends Block<IChatCardListProps> {
  constructor() {
    super('div', {
      chats: [],
    });
  }

  render() {
    const appStore = store.getState();
    const chats = this.props.chats;

    let chatsList: string[] = [];

    if (chats.length > 0) {
      chatsList = chats.reduce(
        (acc: string[], chat: IChatCardProps, index: number) => {
          const chatDeleteButton = new ChatDeleteButton({
            settings: { withInternalID: true },
            events: {
              click: handleDeleteChatButtonClick,
            },
          });
          const chatCard = new ChatCard({
            ...chat,
            isChatActive: Number(chat.id) === Number(appStore.currentChat),
            chatDeleteButton,
            settings: { withInternalID: true },
            events: {
              click: handleChatCardClick,
            },
          });
          acc[index] =
            chatCard.getContentAsString() + '<hr class="chat-separator" />';
          return acc;
        },
        []
      );
    }

    const tmpl = new Templator(chatCardListTempl);
    const str = tmpl.compile({
      chatCardList: chatsList.join(''),
    });
    return str;
  }
}
