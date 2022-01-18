import './message-right.scss';
import { messageRightTempl } from './message-right.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { dateHoursMinutesFormat } from '../../../../utils/time';
import { IMessageRightProps } from './types';

export class MessageRight extends Block<IMessageRightProps> {
  constructor(props: IMessageRightProps) {
    super('div', props, 'message-right');
  }

  render() {
    const tmpl = new Templator(messageRightTempl);
    const str = tmpl.compile({
      content: this.props.content,
      time: dateHoursMinutesFormat(this.props.time),
    });
    return str;
  }
}
