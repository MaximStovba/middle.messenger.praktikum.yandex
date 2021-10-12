// signup.tmpl.js

export const signupTempl = `
<section class="signin">
    <div class="signin__modal">
      <p class="signin__title">Регистрация</p>
      <div class='popup__btn-container'>
        <span class='popup__btn-error popup__btn-error_hidden'>
          Не верный пароль!
        </span>

        <div class="popup__input">
          <span
            class="popup__input-title popup__input-title_active"/>
            Почта
          </span>
          <input
            type="input"
            name="email"
            value="pochta@yandex.ru"
            placeholder="Введите почту"
            class="popup__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='popup__text-error' />
            Неверный формат
          </span>
        </div>

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
            class='popup__text-error'/>
            Неверный формат
          </span>
        </div>

        <div class="popup__input">
        <span
          class="popup__input-title popup__input-title_active"/>
          Имя
        </span>
        <input
          type="input"
          name="first_name"
          placeholder="Введите имя"
          class="popup__text"
          minLength=3
          maxLength=50
          required=true
        />
        <span
          class='popup__text-error' />
          Неверный формат
        </span>
      </div>

      <div class="popup__input">
        <span
          class="popup__input-title popup__input-title_active"/>
          Фамилия
        </span>
        <input
          type="input"
          name="second_name"
          placeholder="Введите фамилию"
          class="popup__text"
          minLength=3
          maxLength=50
          required=true
        />
        <span
          class='popup__text-error'/>
          Неверный формат
        </span>
      </div>

      <div class="popup__input">
          <span
            class="popup__input-title popup__input-title_active"/>
            Телефон
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Введите телефон"
            class="popup__text"
            minLength=3
            maxLength=50
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <span
            class='popup__text-error' />
            Неверный формат
          </span>
        </div>

        <div class="popup__input">
          <span
            class="popup__input-title popup__input-title_active"/>
            Пароль
          </span>
          <input
            type="password"
            name="password"
            value="12345678"
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
          Зарегистрироваться
        </button>
      </div>
      <a class="signin__link" href="/">Войти</a>
    </div>
  </section>
`;
