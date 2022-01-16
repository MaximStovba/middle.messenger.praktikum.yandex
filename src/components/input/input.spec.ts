import { expect } from 'chai';
import { Input } from './input';
import { JSDOM } from 'jsdom';

global.DOMParser = new JSDOM().window.DOMParser;

const context = {
  title: 'Логин',
  name: 'login',
  type: 'text',
  placeholder: '',
};
const login = new Input(context);
login.setProps({ placeholder: 'Введите логин!' });
const htmlEl = login.render();
const el = htmlEl.querySelector('.popup__text');

describe('Test component Input', () => {
  it('input has tagName "INPUT"', () => {
    expect(el?.tagName).to.eq('INPUT');
  });
  it('input has attribute "name"', () => {
    expect(el?.getAttribute('name')).to.eq(context.name);
  });
  it('input setProps', () => {
    expect(el?.getAttribute('placeholder')).to.eq('Введите логин!');
  });
});
