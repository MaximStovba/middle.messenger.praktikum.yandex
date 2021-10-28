import './profile.scss';
import { render } from '../../utils/render';
import { Templator } from '../../utils/templator';
import { profileTempl } from './profile.tmpl';
import { Block } from '../../utils/block';

export class Profile extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
  }

  render() {
    const tmpl = new Templator(profileTempl);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

const profile = new Profile({});
render('.root', profile);

