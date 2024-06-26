<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtLayout>
    <div class="error-page">
      <h1 class="error-page__title">{{ error?.statusCode }}</h1>
      <NuxtLink class="error-page__link" to="/">Вернуться на главную</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.error-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -0.03em;
    margin-bottom: 30px;
    text-align: center;
  }

  &__link {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.03em;
    text-align: center;
    border: 1px solid $slate-500;
    padding: 15px 20px;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: $slate-500-transparent;
    }
  }
}
</style>
