import './message-left.scss';
import { messageLeftTempl } from './message-left.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class MessageLeft extends Block {
  constructor(props: Record<string, any>) {
    super('div', props, 'message-left');
  }

  render() {
    const tmpl = new Templator(messageLeftTempl);
    const str = tmpl.compile({});
    return str;
  }
}
