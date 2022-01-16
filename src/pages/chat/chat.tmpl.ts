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
        {{chatUserList}}
        {{addUserButton}}
      </div>

      <hr class="chat-separator" />

      </div>

      {{messageList}}

      <form class="chat-send-msg">
        <hr class="chat-separator" />
        <div class="send-msg-element">
          {{contentUploadButton}}
          {{message}}
          {{sendButton}}
        </div>
      </form>

    </div>
  </div>

  {{popupAddChat}}
  {{popupAddUser}}

</section>
`;
