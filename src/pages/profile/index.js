import './profile.scss';

import { profileTempl } from './profile.tmpl';
import { Templator } from '../../utils/templator';

const context = {
  title: 'profile',
};

const tmpl = new Templator(profileTempl);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

root.innerHTML = `
  ${renderedTemplate}
`;
