// controllers/auth.ts

import { SignInAPI } from '../api/auth/signin-api';
import { SignUpAPI } from '../api/auth/signup-api';
import { LogoutAPI } from '../api/auth/logout-api';
import { GetUserAPI } from '../api/auth/get-user-api';
import { Router } from '../utils/router';
import { formValidation } from '../utils/validator';
import { Store } from '../utils/store';

const router = new Router('.root');
const store = new Store();
const signInApi = new SignInAPI();
const signUpApi = new SignUpAPI();
const logoutApi = new LogoutAPI();
const getUserApi = new GetUserAPI();

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
      const login = validateData.inputsValue.login;
      const password = validateData.inputsValue.password;

      signInApi
        .request({ login, password })
        .then((res) => {
          if (res.status === 200) {
            this.getUser();
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

      const first_name = validateData.inputsValue.first_name;
      const second_name = validateData.inputsValue.second_name;
      const login = validateData.inputsValue.login;
      const email = validateData.inputsValue.email;
      const password = validateData.inputsValue.password;
      const phone = validateData.inputsValue.phone;

      signUpApi
        .request({ first_name, second_name, login, email, password, phone })
        .then((res) => {
          if (res.status === 200) {
            const userId = res.response;
            console.log(userId);
            router.go('/');
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
          store.setState({ isLogin: false, user: {} });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
