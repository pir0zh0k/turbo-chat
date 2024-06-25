<script setup lang="ts">
import TextField from "~/components/ui/TextFields/TextField.vue";
import PasswordField from "~/components/ui/TextFields/PasswordField.vue";
import UIButton from "~/components/ui/Buttons/UIButton.vue";

const user = reactive({
  username: {
    value: "",
    error: {
      text: "Введите имя пользователя",
      isError: false,
    },
  },
  password: {
    value: "",
    error: {
      text: "Введите пароль",
      isError: false,
    },
  },
  email: {
    value: "",
    error: {
      text: "Введите корректную почту",
      isError: false,
    },
  },
});

function clearErrors() {
  const { username, password, email } = user;
  username.error.isError = false;
  password.error.isError = false;
  email.error.isError = false;
}

function submit() {
  const { username, password, email } = user;

  const emailValid = validateEmail(email.value);

  if (!emailValid) email.error.isError = true;

  if (username.value.length <= 1) username.error.isError = true;

  if (password.value.length <= 1) password.error.isError = true;

  console.log(user);
}
</script>

<template>
  <form class="form" @submit.prevent="submit">
    <h1 class="form__title">Регистрация</h1>
    <TextField
      v-model="user.username.value"
      name="username"
      type="text"
      label="Имя пользователя"
      placeholder="Введите имя пользователя..."
      :error="user.username.error.isError ? user.username.error.text : null"
      @clear-error="clearErrors"
    />
    <PasswordField
      v-model="user.password.value"
      name="password"
      label="Пароль"
      placeholder="Введите пароль..."
      :error="user.password.error.isError ? user.password.error.text : null"
      @clear-error="clearErrors"
    />
    <TextField
      v-model="user.email.value"
      name="email"
      type="text"
      label="Электронная почта"
      placeholder="Введите электронную почту..."
      :error="user.email.error.isError ? user.email.error.text : null"
      @clear-error="clearErrors"
    />
    <UIButton
      variant="normal"
      size="lg"
      color="primary"
      align-center
      full-width
    >
      Создать аккаунт
    </UIButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  max-width: 600px;
  width: 100%;
  border: 1px solid $slate-500;
  border-radius: $rounded-15;
  padding: 20px;

  &__title {
    @include FormTitle();
    margin-bottom: 40px;
  }
}
</style>
