import './404.scss';
import { Templator } from '../../utils/templator';
import { err404Templ } from './404.tmpl';
import { Block } from '../../utils/block';
import { I404Props } from './types';

export class Err404 extends Block<I404Props> {
  constructor() {
    super('section', {}, 'page-404');
  }

  render() {
    const tmpl = new Templator(err404Templ);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

