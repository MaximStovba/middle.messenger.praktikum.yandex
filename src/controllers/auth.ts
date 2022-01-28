// controllers/auth.ts

import { SignInAPI } from '../api/auth/signin-api';
import { SignUpAPI } from '../api/auth/signup-api';
import { LogoutAPI } from '../api/auth/logout-api';
import { GetUserAPI } from '../api/auth/get-user-api';
import { Router } from '../utils/router';
import { formValidation } from '../utils/validator';
import { Store } from '../utils/store';
import { ChatsController } from './chats';

const router = new Router('.root');
const store = new Store();
const signInApi = new SignInAPI();
const signUpApi = new SignUpAPI();
const logoutApi = new LogoutAPI();
const getUserApi = new GetUserAPI();
const chats = new ChatsController();

export class AuthController {
  public async getUser() {
    try {
      getUserApi
        .request()
        .then((res) => {
          if (res.status === 200) {
            const user = JSON.parse(res.response);
            store.setState({ isLogin: true, user });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async login(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }

      const { login, password } = validateData.inputsValue;

      signInApi
        .request({ login, password })
        .then((res) => {
          if (res.status === 200) {
            this.getUser().then(() => {
              chats.getChats().then(() => {
                router.go('/messenger');
              });
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async registration(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }

      const { first_name, second_name, login, email, password, phone } =
        validateData.inputsValue;

      signUpApi
        .request({ first_name, second_name, login, email, password, phone })
        .then((res) => {
          if (res.status === 200) {
            this.logout().then(() => {
              router.go('/');
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async logout() {
    try {
      logoutApi
        .request()
        .then(() => {
          store.setState({
            isLogin: false,
            user: {},
            chats: [],
            currentChatUsers: [],
            currentChat: null,
            token: null,
            chatMessages: [],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
