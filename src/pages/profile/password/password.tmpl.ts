// password.tmpl.ts

export const passwordTempl: string = `
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

      <div class="profile__password">
        <div class="profile__input">
          <span
          class="profile__input-title profile__input-title_fixed"/>
          Старый пароль
          </span>
          <input
            type="password"
            name="phone"
            value="12345678"
            placeholder="Введите пароль"
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
            Новый пароль
          </span>
          <input
            type="password"
            name="phone"
            value="12345678"
            placeholder="Введите пароль"
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
            Повторить новый пароль
          </span>
          <input
            type="password"
            name="phone"
            value="12345678"
            placeholder="Введите пароль"
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
      <button type='button' class='popup__btn'>
        Сохранить
      </button>

    </div>
  </div>
</section>
`;
