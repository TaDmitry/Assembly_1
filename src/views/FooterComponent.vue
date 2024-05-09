<template>
  <footer class="footer">
    <div class="footer__container main-wrapper">
      <div class="footer__container-shell">
        <div class="footer__container-information">
          <ul class="footer__list">
            <li><h4>Проэкты</h4></li>
            <li>Проэкт 1</li>
            <li>Проэкт 2</li>
            <li>Проэкт 3</li>
          </ul>
          <ul class="footer__list">
            <li><h4>Услуги</h4></li>
            <li>Услуга 1</li>
            <li>Услуга 2</li>
            <li>Услуга 3</li>
          </ul>
          <ul class="footer__list">
            <li><h4>Вопросы</h4></li>
            <li>Техподдержка</li>
          </ul>
        </div>

        <div style="position: relative; overflow: hidden" class="footer__container-map" id="map">
          <a
            href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Яндекс Карты</a
          ><a
            href="https://yandex.ru/maps/190/pavlodar/house/Y08YfwNkQEAEQFtofX54cnVrbQ==/?ll=76.945409%2C52.293884&utm_medium=mapframe&utm_source=maps&z=18.13"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Улица Генерала Дюсенова, 9 — Яндекс Карты</a
          ><iframe
            src="https://yandex.ru/map-widget/v1/?ll=76.945409%2C52.293884&mode=whatshere&whatshere%5Bpoint%5D=76.944932%2C52.294221&whatshere%5Bzoom%5D=17&z=18.13"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
      </div>

      <div class="footer__links">
        <ul class="footer__links-container">
          <li>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-tiktok"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
          </li>
        </ul>
        <div class="footer__warning">
          <p>CRI.com © 2024-<samp class="current-year"></samp>. Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style>
@import '../assets/scss/components/footerComponent/style.scss';
</style>
