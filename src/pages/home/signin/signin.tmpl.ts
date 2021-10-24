// signin.tmpl.ts

export const signinTempl = `
  <div class="signin__modal">
    <p class="signin__title">{{name}}</p>
    <div class='popup__btn-container'>
      <span class='popup__btn-error popup__btn-error_hidden'>
        Не верный пароль!
      </span>
      {{login}}
      {{password}}
      {{button}}
    </div>
    <a class="signin__link" href="/">Нет аккаунта?</a>
  </div>
`;
