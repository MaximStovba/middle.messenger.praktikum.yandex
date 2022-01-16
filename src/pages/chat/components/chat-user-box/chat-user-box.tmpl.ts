// chat-user-box.tmpl.ts

export const chatUserBoxTempl = `
  <div class="chat-user-avatar">
    <img src={{urlAvatar}} alt="Аватар" class="user-card__avatar-img" />
    <div class="user-card__avatar-overlay" data-id={{cardId}}>
      {{userDeleteButton}}
    </div>
  </div>
  <p class="chat-user-name">{{name}}</p>
`;
