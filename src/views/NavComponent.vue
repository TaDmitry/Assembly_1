<template>
  <nav class="navigation-area">
    <section class="navigation-area__wrapper main-wrapper">
      <div class="navigation-area__logo">
        <a href="index.html" class="logo">
          <img src="../../public/img/logo.png" />
        </a>
        <span class="navigation-area__brand">ЦРИ</span>
      </div>
      <div class="navigation-area__menu">
        <div class="main-menu">
          <a
            class="main-menu__burgers"
            id="main-menu__burgers"
            @click="toggleOverflow"
            href="#news_link"
          >
            <span></span>
          </a>
          <div class="main-menu__container" id="main-menu__container">
            <div class="main-menu__shell">
              <ul class="main-menu__list">
                <li class="main-menu__item"><a href="#news_link">Новости</a></li>
                <li class="main-menu__item"><a href="#about-us_link">О нас</a></li>
                <li class="main-menu__item"><a href="#structure_link">Структура</a></li>
                <li class="main-menu__item"><a href="#vacancy_link">Вакансии</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main-menu__controls">
          <div class="main-menu__active" id="mainMenu">
            <span id="selectedLanguage">RU</span>
            <samp class="main-menu__languages" id="languages">
              <a href="#" class="dropdown-item" id="ruLanguage">RU</a>
              <a href="#" class="dropdown-item" id="enLanguage">EN</a>
              <a href="#" class="dropdown-item" id="kkLanguage">KK</a>
            </samp>
          </div>

          <div class="main-menu__office">
            <a href=""><i class="fa-solid fa-circle-user"></i></a>
          </div>

          <div class="main-menu__topic">
            <label class="menu-topic__active">
              <input
                type="checkbox"
                class="menu-topic__checkbox"
                v-model="darkModeEnabled"
                @change="toggleDarkMode"
              />
              <ion-icon name="sunny" class="sunny"></ion-icon>
              <ion-icon name="moon" class="moon"></ion-icon>
              <span class="menu-topic__toggle"></span>
              <span class="menu-topic__animation"></span>
            </label>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // Устанавливаем darkModeEnabled на основе значения из localStorage
      darkModeEnabled: localStorage.getItem('darkModeEnabled') === 'true'
    }
  },
  methods: {
    toggleDarkMode() {
      const body = document.querySelector('body')
      // Переключаем класс в зависимости от состояния darkModeEnabled
      body.classList.toggle('darkstyle', this.darkModeEnabled)
      // Сохраняем состояние в localStorage
      localStorage.setItem('darkModeEnabled', this.darkModeEnabled)
    },
    checkBrowserTheme() {
      // Проверяем, включена ли темная тема в браузере при загрузке страницы
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Если да, то устанавливаем darkModeEnabled в true, только если пользователь не выбрал светлую тему
        if (localStorage.getItem('darkModeEnabled') !== 'false') {
          this.darkModeEnabled = true
          // И применяем класс darkstyle к body
          document.querySelector('body').classList.add('darkstyle')
        }
      }
    },
    toggleOverflow() {
      // Получаем элемент <body>
      const body = document.body
      // Переключаем класс overflow-hidden на элементе body
      body.classList.toggle('overflow-hidden')
    }
  },
  created() {
    // Вызываем метод для проверки темной темы в браузере при создании компонента
    this.checkBrowserTheme()
  }
}
</script>

<style>
@import '../assets/scss/components/navComponent/style.scss';
</style>
