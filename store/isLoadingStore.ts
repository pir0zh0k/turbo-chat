import { defineStore } from "pinia";

interface IsLoadingStore {
  isLoading: boolean;
}

export const useLoadingStore = defineStore("isLoading", {
  state: (): IsLoadingStore => {
    return {
      isLoading: false,
    };
  },
});
