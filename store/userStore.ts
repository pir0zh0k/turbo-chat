import { defineStore } from "pinia";

interface UserStore {
  name: string;
  email: string;
  status: boolean;
}

const defaultValue: UserStore = {
  name: "",
  email: "",
  status: false,
};

export const useUserStore = defineStore("user", {
  state: (): UserStore => defaultValue,
  getters: {
    getUser: (state): UserStore => state,
  },
  actions: {
    setUser({ name, email, status }: UserStore) {
      this.$patch({ name, email, status });
    },
    clear() {
      this.$patch(defaultValue);
    },
  },
});
