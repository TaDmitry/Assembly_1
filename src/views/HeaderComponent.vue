<template>
  <header class="header">
    <section class="header__wrapper wrapper__parallax">
      <div class="wrapper__parallax-inner parallax">
        <div class="parallax__content main-wrapper">
          <h3 class="parallax__title" id="parallax__h3">
            Центр <br />
            Развития <br />
            Информатизации
          </h3>

          <div class="parallax__content-link">
            <a class="parallax__content-button" href="#news_link">
              <ion-icon class="parallax__content-i" name="arrow-down-outline"></ion-icon>
            </a>
          </div>
        </div>
        <div class="parallax__images images-parallax">
          <img src="/img/main-board__background.jpg" class="images-parallax__background" />
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

const forBackground = 15

onMounted(() => {
  const parallax = document.querySelector('.parallax')
  if (parallax && !('ontouchstart' in window)) {
    // Проверка на тип устройства
    parallax.addEventListener('mousemove', (e) => {
      const parallaxWidth = parallax.offsetWidth
      const parallaxHeight = parallax.offsetHeight

      const coordX = e.pageX - parallaxWidth / 2
      const coordY = e.pageY - parallaxHeight / 2

      const coordXprocent = (coordX / parallaxWidth) * 100
      const coordYprocent = (coordY / parallaxHeight) * 100

      const background = document.querySelector('.images-parallax__background')
      background.style.cssText = `transform: translate(${coordXprocent / forBackground}%,${coordYprocent / forBackground}%);`
    })
  }
})
</script>

<style>
@import '../assets/scss/components/headerComponent/style.scss';
</style>
