// src/index.ts

import './vendor/normalize.scss';
import '../static/fonts/open-sans.scss';
import './index.scss';

import { Router } from './utils/router';
import { Signin } from './pages/home/signin';
import { Signup } from './pages/home/signup';
import { Profile } from './pages/profile';
import { EditProfile } from './pages/profile/profile-date';
import { EditPassword } from './pages/profile/password';
import { Chat } from './pages/chat';
import { Err404 } from './pages/404';
import { Err500 } from './pages/500';
import { AuthController } from './controllers/auth';
import { ChatsController } from './controllers/chats';
import { Store } from './utils/store';
import { WebSocketApp } from './utils/ws';
import { Block } from './utils/block';

document.addEventListener('DOMContentLoaded', () => {
  const auth = new AuthController();
  const chats = new ChatsController();
  const router = new Router('.root');
  const store = new Store();
  const appStore = store.getState();

  auth.getUser().then(() => {
    chats.getChats().then(() => {
      router
        .use('/', <typeof Block>Signin)
        .use('/sign-up', <typeof Block>Signup)
        .use('/settings', <typeof Block>Profile)
        .use('/edit-profile', <typeof Block>EditProfile)
        .use('/edit-password', <typeof Block>EditPassword)
        .use('/messenger', <typeof Block>Chat)
        .use('/404', <typeof Block>Err404)
        .use('/500', <typeof Block>Err500);

      router.start();
    });
  });

  store.setListener(startRouter, 'LOGIN');
  store.setListener(startRouter, 'CHATS');
  store.setListener(wsStart, 'TOKEN');

  function startRouter() {
    if (appStore.isLogin === true) {
      if (location.pathname === '/' || location.pathname === '/sign-up') {
        router.go('/messenger');
      }
    } else {
      router.go('/');
    }
    router.start();
  }

  function wsStart() {
    if (appStore.token && appStore.currentChat && appStore.token && appStore.user) {
      const ws = new WebSocketApp(
        appStore.user,
        appStore.currentChat,
        appStore.token
      );
      store.setState({ ws });
    }
  }
});
