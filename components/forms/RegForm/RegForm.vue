<script setup lang="ts">
import { v4 } from "uuid";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import TextField from "~/components/ui/TextFields/TextField.vue";
import UIButton from "~/components/ui/Buttons/UIButton.vue";
import { useLoadingStore } from "~/store/isLoadingStore";

// State
const user = reactive({
  username: "",
  password: "",
  email: "",
});

const rules = {
  username: { required },
  password: { required },
  email: { required, email },
};

// Libs || Composables
const $v = useVuelidate(rules, user);
const useLoading = useLoadingStore();
const router = useRouter();

// Functions
async function register() {
  useLoading.isLoading = true;
  const isValid = await $v.value.$validate();

  if (!isValid) return;

  const res = await account.create(
    v4(),
    user.email,
    user.password,
    user.username,
  );

  if (res.status) {
    await router.push("/success");
  }

  useLoading.isLoading = false;
}
</script>

<template>
  <form autocomplete="off" class="form" @submit.prevent="register">
    <h1 class="form__title">Регистрация</h1>
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
    <TextField
      v-model="user.email"
      name="email"
      type="text"
      label="Электронная почта"
      placeholder="Введите электронную почту..."
      :is-error="$v.email.$error"
      error="Введите корректную электронную почту"
    />
    <UIButton variant="normal" size="lg" color="primary" align-center>
      Создать аккаунт
    </UIButton>
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
}
</style>
