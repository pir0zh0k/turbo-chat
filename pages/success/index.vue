<script lang="ts" setup>
import UIButton from "~/components/ui/Buttons/UIButton.vue";

const router = useRouter();
</script>

<template>
  <div class="success">
    <h1 class="success__title">Аккаунт успешно создан</h1>
    <!--    <NuxtLink class="success__link" to="/">Войти в аккаунт</NuxtLink>-->
    <UIButton @click="router.push('/')" variant="ghost" size="lg">
      Войти в аккаунт
    </UIButton>
  </div>
</template>

<style lang="scss">
.success {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    @include FormTitle();
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>
