import './message-right.scss';
import { messageRightTempl } from './message-right.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class MessageRight extends Block {
  constructor(props: Record<string, any>) {
    super('div', props, 'message-right');
  }

  render() {
    const tmpl = new Templator(messageRightTempl);
    const str = tmpl.compile({});
    return str;
  }
}
