import './chat.scss';
import { render } from '../../utils/render';
import { Templator } from '../../utils/templator';
import { chatTempl } from './chat.tmpl';
import { Block } from '../../utils/block';

export class Chat extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
  }

  render() {
    const tmpl = new Templator(chatTempl);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

const chat = new Chat({});
render('.root', chat);


