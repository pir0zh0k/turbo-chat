<script lang="ts" setup></script>

<template>
  <main class="main">
    <div class="main__inner">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/global/background-main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 20px;

  &__inner {
    max-width: 1920px;
    width: 100%;
    height: 90%;
    background-color: $slate-950-transparent;
    backdrop-filter: blur(20px);
    border-radius: $rounded-15;
  }
}
</style>
