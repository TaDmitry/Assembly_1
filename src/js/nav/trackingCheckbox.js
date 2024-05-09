// Получаем ссылку на чекбокс
const checkbox = document.querySelector('input[type="checkbox"]')

// Добавляем обработчик события "click" для чекбокса
checkbox.addEventListener('click', function (event) {
  // Остановить всплытие события, чтобы избежать его перехвата другими обработчиками
  event.stopPropagation()
})
