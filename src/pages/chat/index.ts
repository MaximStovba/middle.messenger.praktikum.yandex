import "./chat.scss";
import { Router } from "../../utils/router";
import { Templator } from "../../utils/templator";
import { chatTempl } from "./chat.tmpl";
import { Block } from "../../utils/block";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";

import { ChatCardList } from "./components/chat-card-list/chat-card-list";
import { SendMsgInput } from "./components/send-msg-input/send-msg-input";
import { SendMsgButton } from "./components/send-msg-button/send-msg-button";
import { BtnMenuChat } from "./components/btn-menu-chat/btn-menu-chat";
import { inputValidation, formValidation } from "../../utils/validator";
import { ChatsController } from "../../controllers/chats";

const router = new Router(".root");
const chats = new ChatsController();

function openPopupNewChat() {
  const el = document.getElementById("popup-add-chat");
  el?.classList.add("popup_opened");
}

function handleBackToProfileBtnClick() {
  router.go("/settings");
}

function handleCreateNewChatButtonClick(event: Event) {
  const el = document.getElementById("popup-add-chat");
  chats.createChat(event).then(() => {
    el?.classList.remove("popup_opened");
  });
}

const chatCardList = new ChatCardList({});

const message = new SendMsgInput({
  name: "message",
  id: "input-message",
  type: "text",
  value: "",
  placeholder: "Введите сообщение",
  validationMsg: "Сообщение не должно быть пустым!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const sendButton = new SendMsgButton({
  text: "&#10003;",
  settings: { withInternalID: true },
  events: {
    click: formValidation
  }
});

const openPopupNewChatBtn = new BtnMenuChat({
  text: "Создать чат",
  settings: { withInternalID: true },
  events: {
    click: openPopupNewChat
  }
});

const backToProfileBtn = new BtnMenuChat({
  text: "Профиль &gt;",
  settings: { withInternalID: true },
  events: {
    click: handleBackToProfileBtnClick
  }
});

const chatNameInput = new Input({
  title: "Название чата",
  name: "title",
  id: "input-chat-title",
  type: "text",
  placeholder: "Введите название чата",
  validationMsg: "Название чата не может быть пустым!",
  settings: { withInternalID: true }
});

const createNewChatBtn = new Button({
  text: "Создать",
  settings: { withInternalID: true },
  events: {
    click: handleCreateNewChatButtonClick
  }
});

export class Chat extends Block {
  constructor() {
    super("div", {
      chatCardList,
      message,
      sendButton,
      openPopupNewChatBtn,
      backToProfileBtn,
      chatNameInput,
      createNewChatBtn
    });
  }

  render() {
    const tmpl = new Templator(chatTempl);
    const str = tmpl.compile({
      chatCardList: this.props.chatCardList.getContentAsString(),
      message: this.props.message.getContentAsString(),
      sendButton: this.props.sendButton.getContentAsString(),
      openPopupNewChatBtn: this.props.openPopupNewChatBtn.getContentAsString(),
      backToProfileBtn: this.props.backToProfileBtn.getContentAsString(),
      chatNameInput: this.props.chatNameInput.getContentAsString(),
      createNewChatBtn: this.props.createNewChatBtn.getContentAsString()
    });
    return str.firstChild;
  }
}
