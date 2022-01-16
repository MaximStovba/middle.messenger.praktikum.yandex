import './add-user-button.scss';
import { addUserButtonTempl } from './add-user-button.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';

export class AddUserButton extends Block {
  constructor(props: Record<string, any>) {
    super('button', props, 'header-menu-btn');
  }

  render() {
    const tmpl = new Templator(addUserButtonTempl);
    const str = tmpl.compile({});
    return str;
  }
}
