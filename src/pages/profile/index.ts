import "./profile.scss";
import { Router } from "../../utils/router";
import { Templator } from "../../utils/templator";
import { profileTempl } from "./profile.tmpl";
import { Block } from "../../utils/block";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { ProfileButton } from "../../components/profile-button/profile-button";
import { ProfileButtonBack } from "../../components/profile-button-back/profile-button-back";
import { ProfilePatchavatarButton } from "../../components/profile-patchavatar-btn/profile-patchavatar-btn";
import { inputValidation } from "../../utils/validator";
import { AuthController } from "../../controllers/auth";
import { UserController } from "../../controllers/user";
import { Store } from "../../utils/store";

const auth = new AuthController();
const user = new UserController();
const router = new Router(".root");
const store = new Store();

function handleEditDataButtonClick() {
  router.go("/edit-profile");
}

function handleEditPasswordButtonClick() {
  router.go("/edit-password");
}

function handleBackButtonClick() {
  router.go("/messenger");
}

function handleExitButtonClick() {
  auth.logout();
}

function handleOpenPopupAvatarButtonClick() {
  const el = document.getElementById("popup-add-avatar");
  el?.classList.add("popup_opened");
}

function handleAvatarLoadingButtonClick(event: Event) {
  const el = document.getElementById("popup-add-avatar");
  user.changeAvatar(event).then(() => {
    el?.classList.remove("popup_opened");
  });
}

const email = new ProfileInput({
  title: "Почта",
  name: "email",
  id: "input-login-profile",
  type: "email",
  value: "",
  placeholder: "Введите почту",
  validationMsg: "Неверный формат почты!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const login = new ProfileInput({
  title: "Логин",
  name: "login",
  id: "input-login-login",
  type: "text",
  value: "",
  placeholder: "Введите логин",
  validationMsg: "Неверный формат!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const firstName = new ProfileInput({
  title: "Имя",
  name: "first_name",
  id: "input-first-name-profile",
  type: "text",
  value: "",
  placeholder: "Введите имя",
  validationMsg: "Неверный формат!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const secondName = new ProfileInput({
  title: "Фамилия",
  name: "second_name",
  id: "input-second-name-profile",
  type: "text",
  value: "",
  placeholder: "Введите фамилию",
  validationMsg: "Неверный формат!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const nickName = new ProfileInput({
  title: "Имя в чате",
  name: "display_name",
  id: "input-display-name-profile",
  type: "text",
  value: "",
  placeholder: "Введите имя в чате",
  validationMsg: "Неверный формат!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const phone = new ProfileInput({
  title: "Телефон",
  name: "phone",
  id: "input-phone-profile",
  type: "phone",
  value: "",
  placeholder: "Введите телефон",
  validationMsg: "Неверный формат телефонного номера!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const editDataButton = new ProfileButton({
  text: "Изменить данные",
  settings: { withInternalID: true },
  events: {
    click: handleEditDataButtonClick
  }
});

const editPasswordButton = new ProfileButton({
  text: "Изменить пароль",
  settings: { withInternalID: true },
  events: {
    click: handleEditPasswordButtonClick
  }
});

const exitButton = new ProfileButton({
  text: "Выйти",
  settings: { withInternalID: true },
  events: {
    click: handleExitButtonClick
  }
});

const backButton = new ProfileButtonBack({
  text: "<",
  settings: { withInternalID: true },
  events: {
    click: handleBackButtonClick
  }
});

const patchavatarButton = new ProfilePatchavatarButton({
  settings: { withInternalID: true },
  events: {
    click: handleOpenPopupAvatarButtonClick
  }
});

const avatarInput = new Input({
  title: "Аватар",
  name: "avatar",
  id: "input-avatar",
  type: "file",
  settings: { withInternalID: true }
});

const avatarLoadingBtn = new Button({
  text: "Загрузить",
  settings: { withInternalID: true },
  events: {
    click: handleAvatarLoadingButtonClick
  }
});

const appStore = store.getState();
const nameAvatar = "";
const urlAvatar = "";

export class Profile extends Block {
  constructor() {
    super("div", {
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
      avatarInput,
      avatarLoadingBtn
    });
  }

  componentDidMount() {
    if (appStore.user) {
      this.setProps({
        nameAvatar: appStore.user.first_name
      });
      this.setProps({
        urlAvatar: `https://ya-praktikum.tech/api/v2/resources${appStore.user.avatar}`
      });
      email.setProps({
        value: appStore.user.email
      });
      login.setProps({
        value: appStore.user.login
      });
      firstName.setProps({
        value: appStore.user.first_name
      });
      secondName.setProps({
        value: appStore.user.second_name
      });
      nickName.setProps({
        value: appStore.user.display_name ? appStore.user.display_name : ""
      });
      phone.setProps({
        value: appStore.user.phone
      });
    }
  }

  render() {
    const tmpl = new Templator(profileTempl);
    const str = tmpl.compile({
      email: this.props.email.getContentAsString(),
      login: this.props.login.getContentAsString(),
      firstName: this.props.firstName.getContentAsString(),
      secondName: this.props.secondName.getContentAsString(),
      nickName: this.props.nickName.getContentAsString(),
      phone: this.props.phone.getContentAsString(),
      editDataButton: this.props.editDataButton.getContentAsString(),
      editPasswordButton: this.props.editPasswordButton.getContentAsString(),
      exitButton: this.props.exitButton.getContentAsString(),
      backButton: this.props.backButton.getContentAsString(),
      patchavatarButton: this.props.patchavatarButton.getContentAsString(),
      avatarLoadingBtn: this.props.avatarLoadingBtn.getContentAsString(),
      avatarInput: this.props.avatarInput.getContentAsString(),
      nameAvatar: this.props.nameAvatar,
      urlAvatar: this.props.urlAvatar
    });
    return str.firstChild;
  }
}
