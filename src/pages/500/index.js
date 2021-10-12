import './500.scss';
import './500.tmpl';

import { err500Templ } from './500.tmpl';
import { Templator } from '../../utils/templator';

const context = {
  title: '500',
};

const tmpl = new Templator(err500Templ);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

root.innerHTML = `
  ${renderedTemplate}
`;
