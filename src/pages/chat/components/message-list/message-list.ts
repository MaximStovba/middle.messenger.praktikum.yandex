import './message-list.scss';
import { messageListTempl } from './message-list.tmpl';
import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { MessageLeft } from '../message-left/message-left';
import { MessageRight } from '../message-right/message-right';

export class MessageList extends Block {
  constructor() {
    super(
      'div',
      {
        messages: [{ myMsg: true }, { myMsg: false }],
      },
      'chat-pablic-area'
    );
  }

  render() {
    const messages = this.props.messages;

    let msgList: any = [];

    if (messages.length > 0) {
      msgList = messages.reduce(
        (acc: string[], message: any, index: number) => {
          if (message.myMsg) {
            const msgCardR = new MessageRight({
              message,
            });
            acc[index] = msgCardR.getContentAsString();
          } else {
            const msgCardL = new MessageLeft({
              message,
            });
            acc[index] = msgCardL.getContentAsString();
          }

          return acc;
        },
        []
      );
    }

    const tmpl = new Templator(messageListTempl);
    const str = tmpl.compile({
      messageList: msgList.join(''),
    });
    return str;
  }
}
