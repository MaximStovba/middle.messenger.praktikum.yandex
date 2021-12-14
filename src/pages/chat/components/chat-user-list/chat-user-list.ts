import './chat-user-list.scss';
import { chatUserListTempl } from './chat-user-list.tmpl';
import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { ChatUserBox } from '../chat-user-box/chat-user-box';
import { ChatDeleteButton } from '../../../chat/components/chat-delete-btn/chat-delete-btn';
// import { ChatsController } from '../../../../controllers/chats';
// import { Store } from '../../../../utils/store';

// const chats = new ChatsController();
// const store: Store = new Store();

function handleDeleteUserButtonClick(event: Event | any) {
  const el = event.target;
  const parentEl = el?.closest('div');
  const dataId = parentEl.getAttribute('data-id');

  console.log(dataId);
  // chats.deleteChat(dataId).then(() => {
  //   const appStore = store.getState();
  //   console.log(appStore);
  // });
}

export class ChatUserList extends Block {
  constructor() {
    super(
      'ul',
      {
        users: [],
      },
      'header-users-container'
    );
  }

  render() {
    const users = this.props.users;

    let usersList: any = [];

    if (users.length > 0) {
      usersList = users.reduce((acc: string[], user: any, index: number) => {
        const userDeleteButton = new ChatDeleteButton({
          settings: { withInternalID: true },
          events: {
            click: handleDeleteUserButtonClick,
          },
        });
        const userCard = new ChatUserBox({
          ...user,
          userDeleteButton,
        });
        acc[index] = userCard.getContentAsString();
        return acc;
      }, []);
    }

    const tmpl = new Templator(chatUserListTempl);
    const str = tmpl.compile({
      chatUserList: usersList.join(''),
    });
    return str;
  }
}
