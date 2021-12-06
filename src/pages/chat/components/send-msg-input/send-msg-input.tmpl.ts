// send-msg-input.tmpl.ts

export const sendMsgInputTempl = `
  <span
    class="send-msg__text-error">
    {{validationMsg}}
  </span>
  <input
    name="{{name}}"
    type="{{type}}"
    value="{{value}}"
    placeholder="{{placeholder}}"
    id="{{id}}"
    data-id="{{internalId}}"
    class="send-msg-input"
  ></input>
`;
