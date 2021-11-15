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
import { Store } from './utils/store';

document.addEventListener('DOMContentLoaded', () => {
  const auth = new AuthController();
  const router = new Router('.root');
  const store = new Store();
  const appStore = store.getState();

  auth.getUser().then(() => router.start());

  router
    .use('/', Signin)
    .use('/sign-up', Signup)
    .use('/settings', Profile)
    .use('/edit-profile', EditProfile)
    .use('/edit-password', EditPassword)
    .use('/messenger', Chat)
    .use('/404', Err404)
    .use('/500', Err500);

  store.setListener(startRouter);

  function startRouter() {
    if (appStore.isLogin === true) {
      if (location.pathname === '/') {
        router.go('/settings');
      }
    } else {
      router.go('/');
    }
    router.start();
  }
});
