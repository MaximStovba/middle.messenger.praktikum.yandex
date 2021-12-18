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

document.addEventListener('DOMContentLoaded', () => {
  const auth = new AuthController();
  const chats = new ChatsController();
  const router = new Router('.root');
  const store = new Store();
  const appStore = store.getState();

  auth.getUser().then(() => {
    chats.getChats().then(() => {
      router
        .use('/', Signin)
        .use('/sign-up', Signup)
        .use('/settings', Profile)
        .use('/edit-profile', EditProfile)
        .use('/edit-password', EditPassword)
        .use('/messenger', Chat)
        .use('/404', Err404)
        .use('/500', Err500);

      router.start();
    });
  });

  store.setListener(startRouter, 'LOGIN');
  store.setListener(startRouter, 'CHATS');
  store.setListener(wsStart, 'TOKEN');

  function startRouter() {
    if (appStore.isLogin === true) {
      if (location.pathname === '/') {
        router.go('/messenger');
      }
    } else {
      router.go('/');
    }
    router.start();
  }

  function wsStart() {
    console.log(
      `wsStart <USER_ID> ${appStore.user.id}, <CHAT_ID> ${appStore.currentChat}, <TOKEN_VALUE> ${appStore.token}`
    );
  }
});
