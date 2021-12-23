import { expect } from 'chai';
import { Input } from '../components/input/input';
import { Templator } from './templator';

const testTempl = `
<div class='test'>
  <p class='test__title'>{{title}}</p>
  <div class='test__component'>{{input}}</div>
</div>
`;

const input = new Input({
  title: 'Логин',
});

const ctx = {
  title: 'Регистрация',
  input: input.getContentAsString(),
};

const tmpl = new Templator(testTempl);
const compiledHtml = tmpl.compile(ctx);

describe('Test templator', () => {
  it('{{title}} equal to ctx.title', () => {
    const el = compiledHtml.querySelector('.test__title');
    expect(el?.textContent).to.eq(ctx.title);
  });
  it('{{input}} wiht props title equal to input rendered title', () => {
    const el = compiledHtml.querySelector('.popup__input-title');
    expect(el?.innerHTML).to.eq(
      input.render().querySelector('.popup__input-title')?.innerHTML
    );
  });
});
