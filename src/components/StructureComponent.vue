<script setup></script>

<template>
  <section class="structure" id="structure_link">
    <div class="structure__wrapper main-wrapper">
      <h2><span>Структура</span></h2>
      <div class="structure__wrapper-flex">
        <div class="structure__nav">
          <ul class="structure__nav-ul">
            <li class="structure__nav-ul-li">
              <RouterLink to="/" exact>Руководство</RouterLink>
            </li>
            <li class="structure__nav-ul-li">
              <RouterLink to="/departments" exact>Отделы</RouterLink>
            </li>
          </ul>
        </div>

        <div class="structure__content">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
