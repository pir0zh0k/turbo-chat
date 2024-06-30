<script lang="ts" setup>
import Loading from "~/components/ui/Loading.vue";
import { useLoadingStore } from "~/store/isLoadingStore";
import { useUserStore } from "~/store/userStore";

const useLoading = useLoadingStore();
const { setUser, getUser } = useUserStore();
const router = useRouter();

const checkAuthorization = async () => {
  useLoading.isLoading = true;

  try {
    const user = await account.get();
    if (user) {
      setUser(user);
      await router.push("/chats");
      console.log(getUser.name);
    }
  } catch (e) {
    await router.push("/");
  } finally {
    useLoading.isLoading = false;
  }
};

onMounted(async () => {
  await checkAuthorization();
});
</script>

<template>
  <main class="main">
    <div class="main__inner">
      <Loading v-if="useLoading.isLoading" />
      <slot v-else />
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
    overflow: hidden;
  }
}
</style>
