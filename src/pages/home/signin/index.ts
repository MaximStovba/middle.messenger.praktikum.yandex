import './signin.scss';
import '../../../components/button/button.scss';
import '../../../components/input/input.scss';


import { signinTempl } from './signin.tmpl';
import { Templator } from '../../../utils/templator';

const context = {
  title: 'signin',
};

const tmpl = new Templator(signinTempl);
const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

if (root) {
  root.innerHTML = `
  ${renderedTemplate}
`;
}
