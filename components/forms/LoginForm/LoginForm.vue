<script setup lang="ts">
import TextField from "~/components/ui/TextFields/TextField.vue";
import UIButton from "~/components/ui/Buttons/UIButton.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const user = reactive({
  username: "",
  password: "",
});

const rules = {
  username: { required },
  password: { required },
};

const $v = useVuelidate(rules, user);

async function validate() {
  const isValid = await $v.value.$validate();

  console.log(isValid);
}
</script>

<template>
  <form class="form" @submit.prevent="validate">
    <h1 class="form__title">Вход</h1>
    <TextField
      v-model="user.username"
      name="username"
      type="text"
      label="Имя пользователя"
      placeholder="Введите имя пользователя..."
      :is-error="$v.username.$error"
      error="Поле обязательно для заполнения"
    />
    <TextField
      v-model="user.password"
      name="password"
      type="password"
      label="Пароль"
      placeholder="Введите пароль..."
      :is-error="$v.password.$error"
      error="Поле обязательно для заполнения"
    />
    <div class="form__bottom">
      <UIButton variant="normal" size="lg" color="primary"> Войти </UIButton>
      <NuxtLink class="form__update-password" href="https://google.com">
        Забыли пароль?
      </NuxtLink>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  height: 350px;
  max-width: 600px;
  width: 100%;
  border: 1px solid $slate-500;
  border-radius: $rounded-15;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__title {
    @include FormTitle();
    margin-bottom: 40px;
  }

  &__bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__update-password {
    @include LinkMini();
  }
}
</style>
