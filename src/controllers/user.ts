// controllers/user.ts

import { ChangeProfileAPI } from '../api/user/change-profile-api';
import { ChangePasswordAPI } from '../api/user/change-password-api';
import { ChangeAvatarAPI } from '../api/user/change-avatar-api';
import { FindUserAPI } from '../api/user/find-user-api';
import { formValidation, getCurrentForm } from '../utils/validator';
import { AuthController } from './auth';
import { Store } from '../utils/store';

const store = new Store();
const auth = new AuthController();
const changeProfileApi = new ChangeProfileAPI();
const changePasswordApi = new ChangePasswordAPI();
const changeAvatarApi = new ChangeAvatarAPI();
const findUserApi = new FindUserAPI();

export class UserController {
  public async changeProfile(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }

      const first_name = validateData.inputsValue.first_name;
      const second_name = validateData.inputsValue.second_name;
      const display_name = validateData.inputsValue.display_name;
      const login = validateData.inputsValue.login;
      const email = validateData.inputsValue.email;
      const phone = validateData.inputsValue.phone;

      changeProfileApi
        .update({ first_name, second_name, display_name, login, email, phone })
        .then((res) => {
          if (res.status === 200) {
            console.log(JSON.parse(res.response));
            const user = JSON.parse(res.response);
            store.setState({ user });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async changePassword(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }

      const oldPassword = validateData.inputsValue.oldPassword;
      const newPassword = validateData.inputsValue.newPassword;

      changePasswordApi
        .update({ oldPassword, newPassword })
        .then((res) => {
          if (res.status === 200) {
            auth.logout();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async changeAvatar(event: Event) {
    try {
      const form = getCurrentForm(event);
      const data = new FormData(form);

      changeAvatarApi
        .update(data)
        .then((res) => {
          if (res.status === 200) {
            const user = JSON.parse(res.response);
            store.setState({ user });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async findUser(login: string) {
    try {
      findUserApi
        .request({ login })
        .then((res) => {
          if (res.status === 200) {
            console.log(JSON.parse(res.response));
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
