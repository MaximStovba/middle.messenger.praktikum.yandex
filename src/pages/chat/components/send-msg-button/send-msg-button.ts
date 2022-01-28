import './send-msg-button.scss';
import { sendMsgBtnTempl } from './send-msg-button.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { ISendMsgBtnProps } from './types';

export class SendMsgButton extends Block<ISendMsgBtnProps> {
  constructor(props: ISendMsgBtnProps) {
    super('button', props, 'send-msg-btn');
  }

  render() {
    const tmpl = new Templator(sendMsgBtnTempl);
    const str = tmpl.compile({});
    return str;
  }
}
