// password.tmpl.ts

export const passwordTempl = `
<section class="profile">
  <div class="profile__block-left">
    {{backButton}}
  </div>
  <div class="profile__block-right">
    <form class="profile__container">
    <div class="profile__avatar">
    <div class="profile__avatar-container">
      <img src={{urlAvatar}} alt="Аватар" class="profile__avatar-img" />
    </div>
    <p class="profile_name">{{nameAvatar}}</p>
  </div>
      <div class="profile__password">
        {{oldPassword}}
        {{newPassword}}
      </div>
      {{saveButton}}
    </form>
  </div>
</section>
`;
