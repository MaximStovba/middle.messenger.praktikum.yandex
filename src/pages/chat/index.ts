import './chat.scss';
import { Router } from '../../utils/router';
import { Templator } from '../../utils/templator';
import { chatTempl } from './chat.tmpl';
import { Block } from '../../utils/block';
import { PopupWithForm } from '../../components/popup-with-form/popup-with-form';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { ChatCardList } from './components/chat-card-list/chat-card-list';
import { ChatUserList } from './components/chat-user-list/chat-user-list';
import { MessageList } from './components/message-list/message-list';
import { ChatEmptyMsg } from './components/chat-empty-msg/chat-empty-msg';
import { SendMsgInput } from './components/send-msg-input/send-msg-input';
import { SendMsgButton } from './components/send-msg-button/send-msg-button';
import { ContentUploadButton } from './components/content-upload-button/content-upload-button';
import { BtnMenuChat } from './components/btn-menu-chat/btn-menu-chat';
import { AddUserButton } from './components/add-user-button/add-user-button';
import { inputValidation, formValidation } from '../../utils/validator';
import { ChatsController } from '../../controllers/chats';
import { UserController } from '../../controllers/user';
import { Store } from '../../utils/store';

const router = new Router('.root');
const chats = new ChatsController();
const users = new UserController();

const store: Store = new Store();
const appStore = store.getState();

function openPopupNewChat() {
  const el = document.getElementById('popup-add-chat');
  const parentEl = el?.closest('div');
  parentEl?.classList.add('popup_opened');
}

function openPopupAddUserToChat() {
  const addUserEl = document.getElementById('popup-add-user');
  const parentAddUserEl = addUserEl?.closest('div');
  parentAddUserEl?.classList.add('popup_opened');
}

function handleBackToProfileBtnClick() {
  router.go('/settings');
}

function handleCreateNewChatButtonClick(event: Event) {
  const el = document.getElementById('popup-add-chat');
  const parentEl = el?.closest('div');
  chats.createChat(event).then(() => {
    parentEl?.classList.remove('popup_opened');
  });
}

function handleAddNewUserButtonClick(event: Event) {
  users.findUser(event).then((res) => {
    if (res?.status === 200) {
      const users = JSON.parse(res.response);
      const usersId = users.map((user: any) => user.id);
      const chatId = appStore.currentChat;

      chats.addUserToChat(usersId, chatId);
    }
  });

  handleAllPopupClose();
}

function handleAllPopupClose() {
  const addChatEl = document.getElementById('popup-add-chat');
  const parentAddChatEl = addChatEl?.closest('div');
  parentAddChatEl?.classList.remove('popup_opened');

  const addUserEl = document.getElementById('popup-add-user');
  const parentAddUserEl = addUserEl?.closest('div');
  parentAddUserEl?.classList.remove('popup_opened');
}

function handleContentUploadButtonClick() {
  console.log('handleContentUploadButtonClick');
}

const chatCardList = new ChatCardList();
const chatUserList = new ChatUserList();

const messageList = new MessageList();
const chatEmptyMsg = new ChatEmptyMsg({});

const message = new SendMsgInput({
  name: 'message',
  id: 'input-message',
  type: 'text',
  value: '',
  placeholder: 'Введите сообщение',
  validationMsg: 'Сообщение не должно быть пустым!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const contentUploadButton = new ContentUploadButton({
  settings: { withInternalID: true },
  events: {
    click: handleContentUploadButtonClick,
  },
});

const sendButton = new SendMsgButton({
  settings: { withInternalID: true },
  events: {
    click: formValidation,
  },
});

const openPopupNewChatBtn = new BtnMenuChat({
  text: 'Создать чат',
  settings: { withInternalID: true },
  events: {
    click: openPopupNewChat,
  },
});

const backToProfileBtn = new BtnMenuChat({
  text: 'Профиль &gt;',
  settings: { withInternalID: true },
  events: {
    click: handleBackToProfileBtnClick,
  },
});

const addUserButton = new AddUserButton({
  settings: { withInternalID: true },
  events: {
    click: openPopupAddUserToChat,
  },
});

const chatNameInput = new Input({
  title: 'Название чата',
  name: 'title',
  id: 'input-chat-title',
  type: 'text',
  placeholder: 'Введите название чата',
  validationMsg: 'Название чата не может быть пустым!',
  settings: { withInternalID: true },
});

const createNewChatBtn = new Button({
  text: 'Создать',
  settings: { withInternalID: true },
  events: {
    click: handleCreateNewChatButtonClick,
  },
});

const popupAddChat = new PopupWithForm({
  popupId: 'popup-add-chat',
  title: 'Создать чат',
  input: chatNameInput.getContentAsString(),
  button: createNewChatBtn.getContentAsString(),
  settings: { withInternalID: true },
  events: {
    click: handleAllPopupClose,
  },
});

const userLoginInput = new Input({
  title: 'Логин',
  name: 'login',
  id: 'input-chat-user-login',
  type: 'text',
  placeholder: 'Введите имя пользователя',
  validationMsg: 'Неверный логин!',
  settings: { withInternalID: true },
});

const addNewUserBtn = new Button({
  text: 'Добавить',
  settings: { withInternalID: true },
  events: {
    click: handleAddNewUserButtonClick,
  },
});

const popupAddUser = new PopupWithForm({
  popupId: 'popup-add-user',
  title: 'Добавить пользователя',
  input: userLoginInput.getContentAsString(),
  button: addNewUserBtn.getContentAsString(),
  settings: { withInternalID: true },
  events: {
    click: handleAllPopupClose,
  },
});

export class Chat extends Block {
  constructor() {
    super('div', {
      chatCardList,
      chatUserList,
      messageList,
      chatEmptyMsg,
      message,
      sendButton,
      contentUploadButton,
      openPopupNewChatBtn,
      backToProfileBtn,
      addUserButton,
      popupAddChat,
      popupAddUser,
    });

    store.setListener(this.componentDidMount.bind(this), 'CHATS');
  }

  componentDidMount() {
    this.props.chatCardList.setProps({ chats: appStore.chats });
    this.props.chatUserList.setProps({
      users: appStore.currentChatUsers,
    });
  }

  render() {
    const tmpl = new Templator(chatTempl);
    const str = tmpl.compile({
      chatCardList: this.props.chatCardList.getContentAsString(),
      chatUserList: this.props.chatUserList.getContentAsString(),
      messageList: appStore.currentChat
        ? this.props.messageList.getContentAsString()
        : this.props.chatEmptyMsg.getContentAsString(),
      message: this.props.message.getContentAsString(),
      sendButton: this.props.sendButton.getContentAsString(),
      contentUploadButton: this.props.contentUploadButton.getContentAsString(),
      openPopupNewChatBtn: this.props.openPopupNewChatBtn.getContentAsString(),
      backToProfileBtn: this.props.backToProfileBtn.getContentAsString(),
      addUserButton: appStore.currentChat
        ? this.props.addUserButton.getContentAsString()
        : '',
      popupAddChat: this.props.popupAddChat.getContentAsString(),
      popupAddUser: this.props.popupAddUser.getContentAsString(),
    });
    return str.firstChild;
  }
}
