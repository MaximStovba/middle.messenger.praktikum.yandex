import './profile-date.scss';
import { render } from '../../../utils/render';
import { Templator } from '../../../utils/templator';
import { profileDateTempl } from './profile-date.tmpl';
import { Block } from '../../../utils/block';
import { ProfileInput } from "../../../components/profile-input/profile-input";
import { Button } from "../../../components/button/button";
import { inputValidation, formValidation } from "../../../utils/validator";

const email = new ProfileInput({
  title: "Почта",
  name: "email",
  id: "input-login-profile",
  type: "email",
  value: "mail@ya.ru",
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
  value: "Login",
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
  value: "Ivan",
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
  value: "Ivanov",
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
  name: "nick_name",
  id: "input-nick-name-profile",
  type: "text",
  value: "Tzar",
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
  value: "+79179876500",
  placeholder: "Введите телефон",
  validationMsg: "Неверный формат телефонного номера!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const saveButton = new Button({
  text: "Сохранить",
  settings: { withInternalID: true },
  events: {
    click: formValidation
  }
});

export class Profile extends Block {
  constructor() {
    super("div", {
      email,
      login,
      firstName,
      secondName,
      nickName,
      phone,
      saveButton,
    });
  }

  render() {
    const tmpl = new Templator(profileDateTempl);
    const str = tmpl.compile({
      email: this.props.email.getContentAsString(),
      login: this.props.login.getContentAsString(),
      firstName: this.props.firstName.getContentAsString(),
      secondName: this.props.secondName.getContentAsString(),
      nickName: this.props.nickName.getContentAsString(),
      phone: this.props.phone.getContentAsString(),
      saveButton: this.props.saveButton.getContentAsString(),
    });
    return str.firstChild;
  }
}

const profile = new Profile();
render(".root", profile);

