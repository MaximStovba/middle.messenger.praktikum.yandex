import './message-list.scss';
import { messageListTempl } from './message-list.tmpl';
import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { MessageLeft } from '../message-left/message-left';
import { MessageRight } from '../message-right/message-right';
import { Store } from '../../../../utils/store';
import { IMessageListProps } from './types';
import { IMessageRightProps } from '../message-right/types';

const store: Store = new Store();
const appStore = store.getState();

export class MessageList extends Block<IMessageListProps> {
  constructor() {
    super(
      'div',
      {
        messages: [],
      },
      'chat-pablic-area-msg'
    );

    store.setListener(this.componentDidMount.bind(this), 'CHATS');
    store.setListener(this.componentDidMount.bind(this), 'MESSAGES');
  }

  componentDidMount() {
    appStore.chatMessages &&
    this.setProps({ messages: appStore.chatMessages });
  }

  render() {
    const messages = this.props.messages;

    let msgList: string[] | [] = [];

    if (messages.length > 0 && appStore.user) {
      msgList = messages.reduce(
        (acc: string[], message: IMessageRightProps, index: number) => {
          if (appStore.user?.id !== message.user_id) {
            const msgCardR = new MessageRight(message);
            acc[index] = msgCardR.getContentAsString();
          } else {
            const msgCardL = new MessageLeft(message);
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
