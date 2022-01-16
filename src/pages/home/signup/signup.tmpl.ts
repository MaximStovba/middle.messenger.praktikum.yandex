// signup.tmpl.js

export const signupTempl = `
  <form name="signup" method="POST" action="#" class="signup__modal">
    <p class="signup__title">{{name}}</p>
    <div class='popup__btn-container'>
      <span class='popup__btn-error popup__btn-error_hidden'>
        Не верный пароль!
      </span>
      {{firstName}}
      {{secondName}}
      {{login}}
      {{email}}
      {{password}}
      {{phone}}
      {{button}}
    </div>
    <a class="signup__link" href="/">Войти</a>
  </form>
`;
