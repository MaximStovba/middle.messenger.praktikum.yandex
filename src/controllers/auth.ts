// controllers/auth.ts
import { SignInAPI } from '../api/auth/signin-api';
import { Router } from '../utils/router';
import { formValidation } from '../utils/validator';

const router = new Router('.root');
const loginApi = new SignInAPI();

export class AuthController {
  public async login(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }
      const login = validateData.inputsValue.login;
      const password = validateData.inputsValue.password;

      loginApi
        .request({ login, password })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            router.go('/settings');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
