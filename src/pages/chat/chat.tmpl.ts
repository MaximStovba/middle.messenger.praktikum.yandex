// chat.tmpl.ts

export const chatTempl = `
<section class="chat-page">
  <div class="chat-page__users-block">
    <div class="chat-menu">
      {{openPopupNewChatBtn}}
      {{backToProfileBtn}}
    </div>
    <input type="text" class="input-search" placeholder="Поиск"></input>

    <hr class="chat-separator" />
    {{chatCardList}}

  </div>
  <div class="chat-page__msg-block">
    <div class="chat-container">
      <div class="chat-header">

      <div class="header-element">
        <ul class="header-users-container">
          <li class="chat-user-box">
            <div class="chat-user-avatar"></div>
            <p class="chat-user-name">Алина</p>
          </li>
          <li class="chat-user-box">
            <div class="chat-user-avatar"></div>
            <p class="chat-user-name">Юля</p>
          </li>
        </ul>
        <button class="header-menu-btn">&#8801;</button>
      </div>

      <hr class="chat-separator" />

      </div>

      {{messageList}}

      <form class="chat-send-msg">
        <hr class="chat-separator" />
        <div class="send-msg-element">
          <button class="content-upload-btn">+</button>
          {{message}}
          {{sendButton}}
        </div>
      </form>

    </div>
  </div>
  <div id="popup-add-chat" class="popup">
    <form class="popup-form__modal">
      <p class="popup-form__title">Создать чат</p>
      {{chatNameInput}}
      {{createNewChatBtn}}
    </form>
  </div>
</section>
`;
