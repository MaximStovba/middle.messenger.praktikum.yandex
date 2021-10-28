import './profile-date.scss';
import { render } from '../../../utils/render';
import { Templator } from '../../../utils/templator';
import { profileDateTempl } from './profile-date.tmpl';
import { Block } from '../../../utils/block';

export class ProfileDete extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
  }

  render() {
    const tmpl = new Templator(profileDateTempl);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

const profileDate = new ProfileDete({});
render('.root', profileDate);
