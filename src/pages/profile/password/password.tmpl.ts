// password.tmpl.ts

export const passwordTempl = `
<section class="profile">
  <div class="profile__block-left">
    <a href="/"><button type='button' class='profile_btn-back'></button></a>
  </div>
  <div class="profile__block-right">
    <form class="profile__container">
      <div class="profile__photo">
        <button type='button' class='profile_btn-avatar'></button>
        <p class='profile_name'>Иван</p>
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
