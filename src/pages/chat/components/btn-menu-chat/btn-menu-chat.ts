import './btn-menu-chat.scss';
import { btnMenuChatTempl } from './btn-menu-chat.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { IBtnMenuChatProps } from './types';

export class BtnMenuChat extends Block<IBtnMenuChatProps> {
  constructor(props: IBtnMenuChatProps) {
    super('button', props, 'btn-menu-chat');
  }

  render() {
    const tmpl = new Templator(btnMenuChatTempl);
    const str = tmpl.compile({
      text: this.props.text,
    });
    return str;
  }
}
