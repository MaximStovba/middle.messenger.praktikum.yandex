import "./signin.scss";
import { render } from "../../../utils/render";
import { Templator } from "../../../utils/templator";
import { signinTempl } from "./signin.tmpl";
import { Block } from "../../../utils/block";
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import { inputValidation, formValidation } from "../../../utils/validator";

const login = new Input({
  title: "Логин",
  name: "login",
  id: "input-login",
  type: "text",
  placeholder: "Введите логин",
  validationMsg: "Не верный логин!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const password = new Input({
  title: "Пароль",
  name: "password",
  id: "input-password",
  type: "password",
  placeholder: "Введите пароль",
  validationMsg: "Не верный пароль!",
  settings: { withInternalID: true },
  events: {
    focus: inputValidation,
    blur: inputValidation
  }
});

const button = new Button({
  text: "Войти",
  settings: { withInternalID: true },
  events: {
    click: formValidation
  }
});

export class Signin extends Block {
  constructor() {
    super(
      "section",
      {
        name: "Вход",
        login,
        password,
        button
      },
      "signin"
    );
  }

  render() {
    const tmpl = new Templator(signinTempl);
    const str = tmpl.compile({
      name: this.props.name,
      login: this.props.login.getContentAsString(),
      password: this.props.password.getContentAsString(),
      button: this.props.button.getContentAsString()
    });
    return str.firstChild;
  }
}

const signin = new Signin();
render(".root", signin);
