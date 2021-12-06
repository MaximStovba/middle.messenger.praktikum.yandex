// profile-date.tmpl.js

export const profileDateTempl = `
<section class="profile">
  <div class="profile__block-left">
    {{backButton}}
  </div>
  <div class="profile__block-right">
    <form class="profile__container">
      <div class="profile__avatar">
        <div class="profile__avatar-container">
          <img src={{urlAvatar}} alt="Аватар" class="profile__avatar-img" />
          <div class="profile__avatar-overlay">
            {{patchavatarButton}}
          </div>
        </div>
        <p class="profile_name">{{nameAvatar}}</p>
      </div>
      <div class="profile__about">
        {{email}}
        {{login}}
        {{firstName}}
        {{secondName}}
        {{nickName}}
        {{phone}}
      </div>
      {{saveButton}}
    </form>
  </div>
  <div id="popup-add-avatar" class="popup">
    <form class="popup-form__modal">
      <p class="popup-form__title">Добавить фото</p>
      {{avatarInput}}
      {{avatarLoadingBtn}}
    </form>
  </div>
</section>
`;
