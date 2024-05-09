document.querySelectorAll('.parallax__content-button, nav').forEach((element) => {
  element.addEventListener('click', function (e) {
    e.preventDefault()
    const targetLink = e.target.closest('a')
    if (targetLink) {
      const targetId = targetLink.getAttribute('href')?.substring(1)
      const targetSection = document.getElementById(targetId)

      const targetOffset = targetSection?.getBoundingClientRect().top + window.scrollY

      // Плавная прокрутка к целевой секции
      window.scrollTo({
        top: targetOffset - this.offsetHeight,
        behavior: 'smooth'
      })
    }
  })
})
