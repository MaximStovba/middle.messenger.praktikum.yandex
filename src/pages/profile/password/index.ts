import './password.scss';
import { Templator } from '../../../utils/templator';
import { passwordTempl } from './password.tmpl';
import { Block } from '../../../utils/block';
import { ProfileInput } from '../../../components/profile-input/profile-input';
import { Button } from '../../../components/button/button';
import { inputValidation, formValidation } from '../../../utils/validator';

const oldPassword = new ProfileInput({
  title: 'Старый пароль',
  name: 'oldPassword',
  id: 'input-oldpassword-profile',
  type: 'password',
  value: 'Ghdjkf678484',
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
  value: 'Ghdjkf678409',
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
    click: formValidation,
  },
});

export class EditPassword extends Block {
  constructor() {
    super('div', {
      oldPassword,
      newPassword,
      saveButton,
    });
  }

  render() {
    const tmpl = new Templator(passwordTempl);
    const str = tmpl.compile({
      oldPassword: this.props.oldPassword.getContentAsString(),
      newPassword: this.props.newPassword.getContentAsString(),
      saveButton: this.props.saveButton.getContentAsString(),
    });
    return str.firstChild;
  }
}
