// popup-with-form.tmpl.ts
export const popupWithFormTempl = `
  <form id={{popupId}} class="popup-form__modal">
    <p class="popup-form__title">{{title}}</p>
    {{input}}
    {{button}}
  </form>
`;
