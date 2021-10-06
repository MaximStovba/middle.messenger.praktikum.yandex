// home.tmpl.js

export const testTempl = `
<section class="home">
  <div class="home__modal">
    <p class="home__title">{{title}}</p>
    <ul class="home__links">
      <li><a class="home__link" href="signin">1. Авторизация</a></li>
      <li><a class="home__link" href="signup">2. Регистрация</a></li>
      <li><a class="home__link" href="chat">3. Список чатов и лента переписки</a></li>
      <li><a class="home__link" href="me">4. Настройки пользователя</a></li>
      <li><a class="home__link" href="404">5. Страница 404</a></li>
      <li><a class="home__link" href="500">6. Страница 5**</a></li>
    </ul>
  </div>
</section>
`;
