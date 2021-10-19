import './profile-date.scss';

import { profileDateTempl } from './profile-date.tmpl';
import { Templator } from '../../../utils/templator';

const context = {
  title: 'profile',
};

const tmpl = new Templator(profileDateTempl);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${renderedTemplate}
`;
}
