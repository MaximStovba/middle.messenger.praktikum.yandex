// input.tmpl.ts

export const inputTempl = `
  <p
    class="popup__input-title popup__input-title_active"/>
    {{title}}
  </p>
  <input
    name="{{name}}"
    type="{{type}}"
    placeholder="{{placeholder}}"
    id="{{id}}"
    data-id="{{internalId}}"
    class="popup__text"
  />
  <span
    class='popup__text-error' />
    {{validationMsg}}
  </span>
`;
