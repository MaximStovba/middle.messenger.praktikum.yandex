// chat.tmpl.ts

export const chatTempl = `
<section class="chat-page">
  <div class="chat-page__users-block">
    <div class="chat-menu">

      {{createChatBtn}}

      {{backToProfileBtn}}

    </div>
    <input type="text" class="input-search" placeholder="Поиск"></input>

    <hr class="chat-separator" />

    {{chatCard1}}

    <hr class="chat-separator" />

    {{chatCard1}}

    <hr class="chat-separator" />

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

      <div class="chat-pablic-area">
        <p class="chat-date">&mdash; Апрель, 23 &mdash;</p>
        <div class="message-left">
          <p class="message-left__text">Отлично! Предлагаю обсудить.</p>
          <span class="message-left__time">10:38</span>
        </div>
        <div class="message-right">
          <p class="message-right__text">Добрый день! Предложение направил.</p>
          <span class="message-right__time">10:38</span>
        </div>
      </div>

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
</section>
`;
