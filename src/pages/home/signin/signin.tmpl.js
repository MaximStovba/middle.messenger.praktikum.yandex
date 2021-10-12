// signin.tmpl.js

export const signinTempl = `
<section class="signin">
    <div class="signin__modal">
      <p class="signin__title">Вход</p>
      <div class='popup__btn-container'>
        <span class='popup__btn-error popup__btn-error_hidden'>
          Не верный пароль!
        </span>
        <div class="popup__input">
          <span
            class="popup__input-title popup__input-title_active"/>
            Логин
          </span>
          <input
            type="input"
            name="login"
            placeholder="Введите логин"
            class="popup__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='popup__text-error' />
            Неверный логин
          </span>
        </div>
    <div class="popup__input">
          <span
            class="popup__input-title popup__input-title_active"/>
            Пароль
          </span>
          <input
            type="input"
            name="password"
            placeholder="Введите пароль"
            class="popup__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='popup__text-error popup__text-error_active'/>
            Неверный пароль
          </span>
        </div>
        <button type='button' class='popup__btn'>
          Войти
        </button>
      </div>
      <a class="signin__link" href="/">Нет аккаунта?</a>
    </div>
  </section>
`;
