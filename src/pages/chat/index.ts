import './chat.scss';
import { render } from '../../utils/render';
import { Templator } from '../../utils/templator';
import { chatTempl } from './chat.tmpl';
import { Block } from '../../utils/block';
import { sendMsgInput } from "../../components/send-msg-input/send-msg-input";
import { sendMsgButton } from "../../components/send-msg-button/send-msg-button";
import { inputValidation, formValidation } from "../../utils/validator";

const message = new sendMsgInput({
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

const sendButton = new sendMsgButton({
  text: "&#10003;",
  settings: { withInternalID: true },
  events: {
    click: formValidation
  }
});

export class Chat extends Block {
  constructor() {
    super("div", {
      message,
      sendButton,
    });
  }

  render() {
    const tmpl = new Templator(chatTempl);
    const str = tmpl.compile({
      message: this.props.message.getContentAsString(),
      sendButton: this.props.sendButton.getContentAsString(),
    });
    return str.firstChild;
  }
}

const chat = new Chat();
render('.root', chat);


