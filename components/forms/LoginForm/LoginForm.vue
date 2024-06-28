<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import TextField from "~/components/ui/TextFields/TextField.vue";
import UIButton from "~/components/ui/Buttons/UIButton.vue";
import { useLoadingStore } from "~/store/isLoadingStore";

// States
const user = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required },
};

// Libs || Composables
const $v = useVuelidate(rules, user);
const useLoading = useLoadingStore();
const router = useRouter();

// Functions
const login = async () => {
  useLoading.isLoading = true;
  const isValid = await $v.value.$validate();

  if (!isValid) return;

  await account.createEmailPasswordSession(user.email, user.password);
  const res = await account.get();

  if (res.status) {
    await router.push("/chats");
  }

  useLoading.isLoading = false;
};
</script>

<template>
  <form class="form" @submit.prevent="login">
    <h1 class="form__title">Вход</h1>
    <TextField
      v-model="user.email"
      name="username"
      type="text"
      label="Электронная почта"
      placeholder="Введите электронную почту..."
      :is-error="$v.email.$error"
      error="Введите корректную электронную почту"
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
      <NuxtLink class="form__update-password" to="https://google.com">
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
