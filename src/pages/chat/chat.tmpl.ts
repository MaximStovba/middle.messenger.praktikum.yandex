// chat.tmpl.ts

export const chatTempl = `
<section class="chat-page">
  <div class="chat-page__users-block">
    <div class="chat-menu">
      <button type="button" class="btn-menu-chat btn-create-chat">
        Создать чат
      </button>
      <button type="button" class="btn-menu-chat btn-open-profile">
        Профиль &gt;
      </button>
    </div>
    <input type="text" class="input-search" placeholder="Поиск"></input>

    <hr class="chat-separator" />

    <div class="chat-user-card">
      <h6 class="user-card__name">Алена</h6>
      <p class="user-card__last-msg">
        <span class="user-card__you-msg">Вы: </span>
        Круто!
      </p>
      <p class="user-card__msg-time">11:08</p>
      <span class="user-card__msg-num">5</span>
      <div class="user-card__avatar"></div>
    </div>

    <hr class="chat-separator" />

    <div class="chat-user-card">
      <h6 class="user-card__name">Юлия</h6>
      <p class="user-card__last-msg">
        <span class="user-card__you-msg">Вы: </span>
        Ок!
      </p>
      <p class="user-card__msg-time">19:08</p>
      <span class="user-card__msg-num">3</span>
      <div class="user-card__avatar"></div>
    </div>

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
