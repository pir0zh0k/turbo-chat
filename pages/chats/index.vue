<script lang="ts" setup>
import { useUserStore } from "~/store/userStore";

const { getUser } = useUserStore();
const menu = ref<HTMLDivElement | null>(null);

const toggleMenu = () => {
  menu.value?.classList.toggle("active");
};

const hideMenu = () => {
  if (menu.value?.classList.contains("active")) {
    menu.value?.classList.remove("active");
  }
};

onClickOutside(menu, hideMenu);
</script>

<template>
  <section class="chats">
    <aside class="chats__left">
      <nav ref="menu" class="main-user__menu">
        <button @click="hideMenu" class="menu__control">
          <LucideX :size="32" />
        </button>
      </nav>
      <div class="main-user">
        <button @click.stop="toggleMenu" class="main-user__control">
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
  overflow: hidden;

  &__left,
  &__right {
    width: 100%;
    height: 100%;
  }

  &__left {
    border-right: 1px solid $slate-500;
    position: relative;
  }

  .main-user {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    &__control {
      background: transparent;
      cursor: pointer;
    }

    &__username {
      font-size: 20px;
      line-height: 20px;
      letter-spacing: -0.03em;
    }

    &__menu {
      position: absolute;
      width: 100%;
      height: 100%;
      background: $slate-800-transparent;
      transform-origin: left;
      transform: scaleX(0) translateX(-50%);
      opacity: 0;
      transition: all 0.3s ease;
      overflow: hidden;
      backdrop-filter: blur(50px);
      padding: 20px;
      z-index: 20;

      &.active {
        transform: scaleX(1) translateX(0);
        opacity: 1;
      }
    }
  }

  .menu {
    &__control {
      background: transparent;
      cursor: pointer;
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }

  .search {
  }

  .chats-list {
  }
}
</style>
