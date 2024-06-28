<script lang="ts" setup>
import { useUserStore } from "~/store/userStore";

const { getUser } = useUserStore();
</script>

<template>
  <section class="chats">
    <aside class="chats__left">
      <div class="main-user">
        <button class="main-user__control">
          <LucideMenu :size="32" />
        </button>
        <span class="main-user__username">{{ getUser.name }}</span>
      </div>
      <div class="search"></div>
      <div class="chats-list"></div>
    </aside>
    <div class="chats__right"></div>
  </section>
</template>

<style lang="scss">
.chats {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;

  &__left,
  &__right {
    width: 100%;
    height: 100%;
  }

  &__left {
    border-right: 1px solid $slate-500;
  }

  .main-user {
  }

  .search {
  }

  .chats-list {
  }
}
</style>
