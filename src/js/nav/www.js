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
    }
  },
  created() {
    // Вызываем метод для проверки темной темы в браузере при создании компонента
    this.checkBrowserTheme()
  }
}
