// input.tmpl.ts

export const inputTempl = `
<div class="popup__input">
  <span
    class="popup__input-title popup__input-title_active"/>
    {{title}}
  </span>
  <input
    name="{{name}}"
    type="input"
    placeholder="{{placeholder}}"
    class="popup__text"
    minLength=3
    maxLength=50
    required=true
  />
  <span
    class='popup__text-error popup__text-error_active' />
    {{validationMsg}}
  </span>
</div>
`;
