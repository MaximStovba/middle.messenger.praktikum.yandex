import './500.scss';
import { Templator } from '../../utils/templator';
import { err500Templ } from './500.tmpl';
import { Block } from '../../utils/block';
import { I500Props } from './types';

export class Err500 extends Block<I500Props> {
  constructor() {
    super('section', {}, 'page-500');
  }

  render() {
    const tmpl = new Templator(err500Templ);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}
