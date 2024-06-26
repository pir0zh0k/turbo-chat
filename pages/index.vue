<script lang="ts" setup>
import RegForm from "~/components/forms/RegForm/RegForm.vue";
import LoginForm from "~/components/forms/LoginForm/LoginForm.vue";
</script>

<template>
  <div class="grid">
    <div class="grid__left">
      <RegForm />
    </div>
    <div class="grid__right">
      <LoginForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__left {
    border-right: 1px solid $slate-500;
  }
}
</style>
