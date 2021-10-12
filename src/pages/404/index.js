import './404.scss';
import './404.tmpl';

import { err404Templ } from './404.tmpl';
import { Templator } from '../../utils/templator';

const context = {
  title: '404',
};

const tmpl = new Templator(err404Templ);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

root.innerHTML = `
  ${renderedTemplate}
`;
