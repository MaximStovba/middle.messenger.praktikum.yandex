// profile-input.tmpl.ts

export const profileInputTempl = `
  <p
    class="profile__input-title profile__input-title_fixed"/>
    {{title}}
  </p>
  <input
    name="{{name}}"
    type="{{type}}"
    placeholder="{{placeholder}}"
    id="{{id}}"
    data-id="{{internalId}}"
    class="profile__text"
  />
  <span
    class='profile__text-error'/>
    {{validationMsg}}
  </span>
`;
