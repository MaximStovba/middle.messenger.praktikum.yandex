import './profile.scss';
import { IProfileProps } from './types';
import { Router } from '../../utils/router';
import { Templator } from '../../utils/templator';
import { profileTempl } from './profile.tmpl';
import profileWithoutPhoto from '../../../static/img/profile-without-photo.svg';
import { Block } from '../../utils/block';
import { PopupWithForm } from '../../components/popup-with-form/popup-with-form';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { ProfileInput } from '../../components/profile-input/profile-input';
import { ProfileButton } from '../../components/profile-button/profile-button';
import { ProfileButtonBack } from '../../components/profile-button-back/profile-button-back';
import { ProfilePatchavatarButton } from '../../components/profile-patchavatar-btn/profile-patchavatar-btn';
import { inputValidation } from '../../utils/validator';
import { AuthController } from '../../controllers/auth';
import { UserController } from '../../controllers/user';
import { Store } from '../../utils/store';

const auth = new AuthController();
const user = new UserController();
const router = new Router('.root');
const store = new Store();

function handleEditDataButtonClick() {
  router.go('/edit-profile');
}

function handleEditPasswordButtonClick() {
  router.go('/edit-password');
}

function handleBackButtonClick() {
  router.go('/messenger');
}

function handleExitButtonClick() {
  auth.logout();
}

function handleOpenPopupAddAvatar() {
  const el = document.getElementById('popup-add-avatar');
  const parentEl = el?.closest('div');
  parentEl?.classList.add('popup_opened');
}

function handleAvatarLoadingButtonClick(event: Event) {
  const el = document.getElementById('popup-add-avatar');
  user.changeAvatar(event).then(() => {
    el?.classList.remove('popup_opened');
  });
}

function handleAllPopupClose() {
  const addAvatarEl = document.getElementById('popup-add-avatar');
  const parentAddAvatarEl = addAvatarEl?.closest('div');
  parentAddAvatarEl?.classList.remove('popup_opened');
}

const email = new ProfileInput({
  title: '??????????',
  name: 'email',
  id: 'input-login-profile',
  type: 'email',
  value: '',
  placeholder: '?????????????? ??????????',
  validationMsg: '???????????????? ???????????? ??????????!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const login = new ProfileInput({
  title: '??????????',
  name: 'login',
  id: 'input-login-login',
  type: 'text',
  value: '',
  placeholder: '?????????????? ??????????',
  validationMsg: '???????????????? ????????????!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const firstName = new ProfileInput({
  title: '??????',
  name: 'first_name',
  id: 'input-first-name-profile',
  type: 'text',
  value: '',
  placeholder: '?????????????? ??????',
  validationMsg: '???????????????? ????????????!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const secondName = new ProfileInput({
  title: '??????????????',
  name: 'second_name',
  id: 'input-second-name-profile',
  type: 'text',
  value: '',
  placeholder: '?????????????? ??????????????',
  validationMsg: '???????????????? ????????????!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const nickName = new ProfileInput({
  title: '?????? ?? ????????',
  name: 'display_name',
  id: 'input-display-name-profile',
  type: 'text',
  value: '',
  placeholder: '?????????????? ?????? ?? ????????',
  validationMsg: '???????????????? ????????????!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const phone = new ProfileInput({
  title: '??????????????',
  name: 'phone',
  id: 'input-phone-profile',
  type: 'phone',
  value: '',
  placeholder: '?????????????? ??????????????',
  validationMsg: '???????????????? ???????????? ?????????????????????? ????????????!',
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation,
  },
});

const editDataButton = new ProfileButton({
  text: '???????????????? ????????????',
  settings: { withInternalID: true },
  events: {
    click: handleEditDataButtonClick,
  },
});

const editPasswordButton = new ProfileButton({
  text: '???????????????? ????????????',
  settings: { withInternalID: true },
  events: {
    click: handleEditPasswordButtonClick,
  },
});

const exitButton = new ProfileButton({
  text: '??????????',
  settings: { withInternalID: true },
  events: {
    click: handleExitButtonClick,
  },
});

const backButton = new ProfileButtonBack({
  settings: { withInternalID: true },
  events: {
    click: handleBackButtonClick,
  },
});

const patchavatarButton = new ProfilePatchavatarButton({
  settings: { withInternalID: true },
  events: {
    click: handleOpenPopupAddAvatar,
  },
});

const avatarInput = new Input({
  title: '????????????',
  name: 'avatar',
  id: 'input-avatar',
  type: 'file',
  settings: { withInternalID: true },
});

const avatarLoadingBtn = new Button({
  text: '??????????????????',
  settings: { withInternalID: true },
  events: {
    click: handleAvatarLoadingButtonClick,
  },
});

const popupAddAvatar = new PopupWithForm({
  popupId: 'popup-add-avatar',
  title: '???????????????? ????????',
  input: avatarInput.getContentAsString(),
  button: avatarLoadingBtn.getContentAsString(),
  settings: { withInternalID: true },
  events: {
    click: handleAllPopupClose,
  },
});

const appStore = store.getState();
const nameAvatar = '';
const urlAvatar = '';

export class Profile extends Block<IProfileProps> {
  constructor() {
    super('div', {
      email,
      login,
      firstName,
      secondName,
      nickName,
      phone,
      editDataButton,
      editPasswordButton,
      exitButton,
      backButton,
      nameAvatar,
      urlAvatar,
      patchavatarButton,
      popupAddAvatar,
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
      email.setProps({
        value: appStore.user.email,
      });
      login.setProps({
        value: appStore.user.login,
      });
      firstName.setProps({
        value: appStore.user.first_name,
      });
      secondName.setProps({
        value: appStore.user.second_name,
      });
      nickName.setProps({
        value: appStore.user.display_name ? appStore.user.display_name : '',
      });
      phone.setProps({
        value: appStore.user.phone,
      });
    }
  }

  render() {
    const tmpl = new Templator(profileTempl);
    const str = tmpl.compile({
      email: this.props.email?.getContentAsString(),
      login: this.props.login?.getContentAsString(),
      firstName: this.props.firstName?.getContentAsString(),
      secondName: this.props.secondName?.getContentAsString(),
      nickName: this.props.nickName?.getContentAsString(),
      phone: this.props.phone?.getContentAsString(),
      editDataButton: this.props.editDataButton?.getContentAsString(),
      editPasswordButton: this.props.editPasswordButton?.getContentAsString(),
      exitButton: this.props.exitButton?.getContentAsString(),
      backButton: this.props.backButton?.getContentAsString(),
      patchavatarButton: this.props.patchavatarButton?.getContentAsString(),
      nameAvatar: this.props.nameAvatar,
      urlAvatar: this.props.urlAvatar,
      popupAddAvatar: this.props.popupAddAvatar?.getContentAsString(),
    });
    return str.firstChild;
  }
}
