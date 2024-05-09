//! Сокращения ЦРИ
const replaceTextInH3 = () => {
  const parallax__h3 = document.getElementById('parallax__h3')

  if (parallax__h3) {
    if (window.innerWidth <= 510) {
      parallax__h3.textContent = 'ЦРИ'
    } else {
      parallax__h3.innerHTML = 'Центр <br> Развития <br> Информатизации'
    }
  } else {
    console.error("Элемент <h3 id='parallax__h3'> не найден")
  }
}

// Инициализация сокращений ЦРИ
replaceTextInH3()

// Обработчик изменения размера экрана
window.addEventListener('resize', replaceTextInH3)
