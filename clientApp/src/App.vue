<script setup></script>

<template>
  <section>
    <RouterView />
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

html {
  font-size: 62.5%;
  font-family: 'Nunito';

  body {
    background-color: $color-background;

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    }
  }
}
</style>
