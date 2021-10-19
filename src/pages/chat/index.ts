import './chat.scss';
import './chat.tmpl';

import { chatTempl } from './chat.tmpl';
import { Templator } from '../../utils/templator';

const context = {
  title: 'Chat',
};

const tmpl = new Templator(chatTempl);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${renderedTemplate}
`;
}
