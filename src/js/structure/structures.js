// Изменения активности номера на мобильных устройствах
window.onload = function () {
  function replacePhoneLinks() {
    var phoneLinks = document.getElementsByClassName('telephone')
    var screenWidth = window.innerWidth

    for (var i = 0; i < phoneLinks.length; i++) {
      if (screenWidth <= 768) {
        phoneLinks[i].href = 'tel:+77777777777'
      } else {
        phoneLinks[i].removeAttribute('href')
      }
    }
  }

  // Вызываем функцию при загрузке страницы и изменении размера экрана
  replacePhoneLinks()
  window.addEventListener('resize', replacePhoneLinks)
}
