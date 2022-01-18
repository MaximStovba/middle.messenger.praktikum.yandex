import './message-left.scss';
import { messageLeftTempl } from './message-left.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { dateHoursMinutesFormat } from '../../../../utils/time';
import { IMessageLeftProps } from './types';

export class MessageLeft extends Block<IMessageLeftProps> {
  constructor(props: IMessageLeftProps) {
    super('div', props, 'message-left');
  }

  render() {
    const tmpl = new Templator(messageLeftTempl);
    const str = tmpl.compile({
      content: this.props.content,
      time: dateHoursMinutesFormat(this.props.time),
    });
    return str;
  }
}
