import './signup.scss';

import { signupTempl } from './signup.tmpl';
import { Templator } from '../../../utils/templator';

const context = {
  title: 'signin',
};

const tmpl = new Templator(signupTempl);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

root.innerHTML = `
  ${renderedTemplate}
`;
