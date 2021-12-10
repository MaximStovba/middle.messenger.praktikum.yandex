// chat-card.tmpl.ts

export const chatCardTempl = `
  <h6 class="user-card__name">{{title}}</h6>
  <p class="user-card__last-msg">
    <span class="user-card__you-msg user-card__you-msg_hidden">Вы: </span>
    {{lastMsg}}
  </p>
  <p class="user-card__msg-time">{{msgTime}}</p>
  <span class="user-card__msg-num">{{msgNum}}</span>
  <div class="user-card__avatar" id={{cardId}}>
    <img src={{urlAvatar}} alt="Аватар" class="user-card__avatar-img" />
    <div class="user-card__avatar-overlay">
      {{delChatButton}}
    </div>
  </div>
`;
