import './chat.scss';
import { Router } from '../../utils/router';
import { Templator } from '../../utils/templator';
import { chatTempl } from './chat.tmpl';
import { Block } from '../../utils/block';
import { ChatCard } from '../../components/chat-card/chat-card';
import { SendMsgInput } from '../../components/send-msg-input/send-msg-input';
import { SendMsgButton } from '../../components/send-msg-button/send-msg-button';
import { BtnMenuChat } from '../../components/btn-menu-chat/btn-menu-chat';
import { inputValidation, formValidation } from '../../utils/validator';

const router = new Router('.root');

function handleCreateChatBtnClick() {
  console.log('handleCreateChatBtnClick');
}

function handleBackToProfileBtnClick() {
  router.go('/settings');
}

const chatCard1 = new ChatCard({
  name: 'Алена',
  lastMsg: 'Круто!',
  msgTime: '11:08',
  msgNum: '5',
});

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

const sendButton = new SendMsgButton({
  text: '&#10003;',
  settings: { withInternalID: true },
  events: {
    click: formValidation,
  },
});

const createChatBtn = new BtnMenuChat({
  text: 'Создать чат',
  settings: { withInternalID: true },
  events: {
    click: handleCreateChatBtnClick,
  },
});

const backToProfileBtn = new BtnMenuChat({
  text: 'Профиль &gt;',
  settings: { withInternalID: true },
  events: {
    click: handleBackToProfileBtnClick,
  },
});

export class Chat extends Block {
  constructor() {
    super('div', {
      chatCard1,
      message,
      sendButton,
      createChatBtn,
      backToProfileBtn,
    });
  }

  render() {
    const tmpl = new Templator(chatTempl);
    const str = tmpl.compile({
      chatCard1: this.props.chatCard1.getContentAsString(),
      message: this.props.message.getContentAsString(),
      sendButton: this.props.sendButton.getContentAsString(),
      createChatBtn: this.props.createChatBtn.getContentAsString(),
      backToProfileBtn: this.props.backToProfileBtn.getContentAsString(),
    });
    return str.firstChild;
  }
}
