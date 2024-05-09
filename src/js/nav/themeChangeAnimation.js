document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('.menu-topic__checkbox')
  var animation = document.querySelector('.menu-topic__animation')

  checkbox.addEventListener('click', function () {
    animation.style.clipPath = 'circle(200% at 100% 0%)'
    // Через короткую задержку возвращаемся к исходному состоянию
    setTimeout(function () {
      animation.style.clipPath = 'circle(0% at 100% 0%)'
    }, 1200)
  })
})
