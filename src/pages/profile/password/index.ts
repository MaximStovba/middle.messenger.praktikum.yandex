import './password.scss';
import { IPasswordProps } from './types';
import { Router } from '../../../utils/router';
import { Templator } from '../../../utils/templator';
import { passwordTempl } from './password.tmpl';
import profileWithoutPhoto from '../../../../static/img/profile-without-photo.svg';
import { Block } from '../../../utils/block';
import { ProfileInput } from '../../../components/profile-input/profile-input';
import { Button } from '../../../components/button/button';
import { ProfileButtonBack } from '../../../components/profile-button-back/profile-button-back';
import { inputValidation } from '../../../utils/validator';
import { UserController } from '../../../controllers/user';
import { Store } from '../../../utils/store';

const router = new Router('.root');
const user = new UserController();
const store = new Store();

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

const appStore = store.getState();
const nameAvatar = '';
const urlAvatar = '';

export class EditPassword extends Block<IPasswordProps> {
  constructor() {
    super('div', {
      oldPassword,
      newPassword,
      saveButton,
      backButton,
      nameAvatar,
      urlAvatar,
    });
  }

  componentDidMount() {
    if (appStore.user) {
      this.setProps({
        nameAvatar: appStore.user.first_name,
      });
      this.setProps({
        urlAvatar: appStore.user.avatar
          ? `https://ya-praktikum.tech/api/v2/resources${appStore.user.avatar}`
          : profileWithoutPhoto,
      });
    }
  }

  render() {
    const tmpl = new Templator(passwordTempl);
    const str = tmpl.compile({
      oldPassword: this.props.oldPassword?.getContentAsString(),
      newPassword: this.props.newPassword?.getContentAsString(),
      saveButton: this.props.saveButton?.getContentAsString(),
      backButton: this.props.backButton?.getContentAsString(),
      nameAvatar: this.props.nameAvatar,
      urlAvatar: this.props.urlAvatar,
    });
    return str.firstChild;
  }
}
