// profile-date.tmpl.js

export const profileDateTempl = `
<section class="profile">
  <div class="profile__block-left">
    <a href="/settings"><button type='button' class='profile_btn-back'>&lt;</button></a>
  </div>
  <div class="profile__block-right">
    <form class="profile__container">
      <div class="profile__photo">
        <button type='button' class='profile_btn-avatar'></button>
        <p class='profile_name'>Иван</p>
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
</section>
`;
