import { testTempl } from './home.tmpl';
import { Templator } from '../../utils/templator';

(function Render() {
  function handleClick() {
    console.log('запуск handleClick!');
  }

  const context = {
    text: 'Мой очень важный span',
    className: 'chats',
    user: {
      info: {
        firstName: 'Alexander',
      },
    },
    handleClick: handleClick,
  };

  const tmpl = new Templator(testTempl);
  const renderedTemplate = tmpl.compile(context);
  const root = document.querySelector('.root');

  root.innerHTML = `
    ${renderedTemplate}
  `;
  return renderedTemplate;
})();
