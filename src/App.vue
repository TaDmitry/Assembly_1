<script setup>
import HeaderComponent from './views/HeaderComponent.vue'
import NavComponent from './views/NavComponent.vue'
import NewsComponent from './views/NewsComponent.vue'
import InformationComponent from './views/InformationComponent.vue'
import VacancyComponent from './views/VacancyComponent.vue'
import FooterComponent from './views/FooterComponent.vue'
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <NavComponent></NavComponent>

  <main>
    <NewsComponent></NewsComponent>
    <InformationComponent></InformationComponent>
    <VacancyComponent></VacancyComponent>
    <FooterComponent></FooterComponent>
  </main>
</template>

<style scoped></style>
