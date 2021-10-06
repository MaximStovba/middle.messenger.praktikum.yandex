import { testTempl } from './home.tmpl';
import { Templator } from '../../utils/templator';

const context = {
  title: 'Страницы Чата',
};

(function Render() {
  const tmpl = new Templator(testTempl);
  const renderedTemplate = tmpl.compile(context);
  const root = document.querySelector('.root');

  root.innerHTML = `
    ${renderedTemplate}
  `;
  return renderedTemplate;
})();
