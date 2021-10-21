// home.tmpl.ts

export const homeTempl = `
<section class="home">
  <div class="home__modal">
    <p class="home__title">{{ userName }}</p>
    <ul class="home__links">
      <li><a class="home__link" href="./signin.html">1. Авторизация</a></li>
      <li><a class="home__link" href="./signup.html">2. Регистрация</a></li>
      <li><a class="home__link" href="./chat.html">3. Список чатов и лента переписки</a></li>
      <li><a class="home__link" href="./profile.html">4. Настройки пользователя</a></li>
      <li><a class="home__link" href="./profile-date.html">4.1. Изменение данных пользователя</a></li>
      <li><a class="home__link" href="./password.html">4.2. Изменение пароля</a></li>
      <li><a class="home__link" href="./404.html">5. Страница 404</a></li>
      <li><a class="home__link" href="./500.html">6. Страница 5**</a></li>
    </ul>
  </div>
  {{ button }}
</section>
`;
