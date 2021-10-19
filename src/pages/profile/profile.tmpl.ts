// profile.tmpl.ts

export const profileTempl: string = `
<section class="profile">
  <div class="profile__block-left">
    <a href="/"><button type='button' class='profile_btn-back'></button></a>
  </div>
  <div class="profile__block-right">
    <div class="profile__container">
      <div class="profile__photo">
        <button type='button' class='profile_btn-avatar'></button>
        <p class='profile_name'>Иван</p>
      </div>
      <div class="profile__about">
        <div class="profile__input">
          <span
          class="profile__input-title profile__input-title_fixed"/>
          Почта
        </span>
          <input
            type="input"
            name="email"
            value="pochta@ya.ru"
            placeholder="Введите почту"
            class="profile__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='profile__text-error'/>
            Неверный формат!
          </span>
        </div>

        <div class="profile__input">
          <span
          class="profile__input-title profile__input-title_fixed"/>
          Логин
        </span>
          <input
            type="input"
            name="login"
            value="ivanivanov"
            placeholder="Введите логин"
            class="profile__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='profile__text-error'/>
            Неверный формат!
          </span>
        </div>

        <div class="profile__input">
          <span
          class="profile__input-title profile__input-title_fixed"/>
          Имя
        </span>
          <input
            type="input"
            name="first_name"
            value="Иван"
            placeholder="Введите имя"
            class="profile__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='profile__text-error'/>
            Неверный формат!
          </span>
        </div>

        <div class="profile__input">
          <span
          class="profile__input-title profile__input-title_fixed"/>
          Фамилия
        </span>
          <input
            type="input"
            name="second_name"
            value="Иванов"
            placeholder="Введите фамилию"
            class="profile__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='profile__text-error'/>
            Неверный формат!
          </span>
        </div>

        <div class="profile__input">
          <span
            class="profile__input-title profile__input-title_fixed"/>
            Имя в чате
          </span>
          <input
            type="input"
            name="nick_name"
            value="Иван"
            placeholder="Введите ник"
            class="profile__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='profile__text-error'/>
            Неверный формат!
          </span>
        </div>

        <div class="profile__input">
          <span
          class="profile__input-title profile__input-title_fixed"/>
          Телефон
          </span>
          <input
            type="input"
            name="phone"
            value="7 987 234-34-56"
            placeholder="Введите телефон"
            class="profile__text"
            minLength=3
            maxLength=50
            required=true
          />
          <span
            class='profile__text-error'/>
            Неверный формат!
          </span>
        </div>
      </div>

      <div class="profile__change">
        <button type='button' class='profile__text popup__text_btn'>Изменить данные</button>
        <button type='button' class='profile__text popup__text_btn'>Изменить пароль</button>
        <button type='button' class='profile__text popup__text_btn popup__text_btn-exit'>Выйти</button>
      </div>
    </div>
  </div>
</section>
`;
