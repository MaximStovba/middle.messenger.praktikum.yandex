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

const router = new Router('.root');

document.addEventListener('DOMContentLoaded', () => {
  router
    .use('/', Signin)
    .use('/sign-up', Signup)
    .use('/settings', Profile)
    .use('/edit-profile', EditProfile)
    .use('/edit-password', EditPassword)
    .use('/messenger', Chat)
    .use('/404', Err404)
    .use('/500', Err500)
    .start();
});
