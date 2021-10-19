import './password.scss';

import { passwordTempl } from './password.tmpl';
import { Templator } from '../../../utils/templator';

const context = {
  title: 'profile',
};

const tmpl = new Templator(passwordTempl);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${renderedTemplate}
`;
}
