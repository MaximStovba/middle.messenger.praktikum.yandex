import './password.scss';
import { Router } from '../../../utils/router';
import { Templator } from '../../../utils/templator';
import { passwordTempl } from './password.tmpl';
import { Block } from '../../../utils/block';
import { ProfileInput } from '../../../components/profile-input/profile-input';
import { Button } from '../../../components/button/button';
import { ProfileButtonBack } from '../../../components/profile-button-back/profile-button-back';
import { inputValidation } from '../../../utils/validator';
import { UserController } from '../../../controllers/user';

const router = new Router('.root');
const user = new UserController();

function handleBackButtonClick() {
  router.back();
}

function handleSaveButtonClick(event: Event) {
  user.changePassword(event);
}

const oldPassword = new ProfileInput({
  title: 'Старый пароль',
  name: 'oldPassword',
  id: 'input-oldpassword-profile',
  type: 'password',
  value: '',
  placeholder: 'Введите старый пароль',
  validationMsg: 'Неверный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const newPassword = new ProfileInput({
  title: 'Новый пароль',
  name: 'newPassword',
  id: 'input-newpassword-profile',
  type: 'password',
  value: '',
  placeholder: 'Введите новый пароль',
  validationMsg: 'Неверный формат!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const saveButton = new Button({
  text: 'Сохранить',
  settings: { withInternalID: true },
  events: {
    click: handleSaveButtonClick,
  },
});

const backButton = new ProfileButtonBack({
  text: '<',
  settings: { withInternalID: true },
  events: {
    click: handleBackButtonClick,
  },
});

export class EditPassword extends Block {
  constructor() {
    super('div', {
      oldPassword,
      newPassword,
      saveButton,
      backButton,
    });
  }

  render() {
    const tmpl = new Templator(passwordTempl);
    const str = tmpl.compile({
      oldPassword: this.props.oldPassword.getContentAsString(),
      newPassword: this.props.newPassword.getContentAsString(),
      saveButton: this.props.saveButton.getContentAsString(),
      backButton: this.props.backButton.getContentAsString(),
    });
    return str.firstChild;
  }
}
