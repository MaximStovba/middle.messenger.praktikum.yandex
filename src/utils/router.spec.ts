import { JSDOM } from 'jsdom';
import { Router } from './router';
import { Signin } from '../pages/home/signin';
import { Signup } from '../pages/home/signup';
import { Err404 } from '../pages/404';
import { Err500 } from '../pages/500';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Block } from './block';

const { window } = new JSDOM(
  `<!doctype html>
     <html>
       <body><div class="roots"></div></body>
     </html>`,
  { url: 'http://localhost' }
);
global.document = window.document;
global.window = global.document.defaultView as Window & typeof globalThis;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Router.__instance = null;

const router = new Router('.roots');
router
  .use('/', <typeof Block>Signin)
  .use('/sign-up', <typeof Block>Signup)
  .use('/404', <typeof Block>Err404)
  .use('/500', <typeof Block>Err500);
router.start();

describe('Test router', () => {
  it('router use(), routes length must be equal to 4', () => {
    expect(router.routes.length).to.eq(4);
  });
  it('router start(), pathname equal to "/"', () => {
    expect(window.location.pathname).to.eq('/');
  });
  it('router go(), go to "/sign-up" page', () => {
    const historyLength = window.history.length;
    router.go('/sign-up');
    expect(window.history.length).to.eq(historyLength + 1);
    expect(window.location.pathname).to.eq('/sign-up');
  });
  it('router back(), sinon spy callCount 1', () => {
    const spy = sinon.spy(global.window.history, 'back');
    router.back();
    expect(spy.callCount).to.eq(1);
  });
  it('router forward(), sinon spy callCount 1', () => {
    const spy = sinon.spy(global.window.history, 'forward');
    router.forward();
    expect(spy.callCount).to.eq(1);
  });
});
