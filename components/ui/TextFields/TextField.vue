<script setup lang="ts">
defineProps<{
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: string | null;
  isError?: boolean;
}>();

const value = defineModel();
</script>

<template>
  <label class="text-field">
    <span class="text-field__body" :class="{ _error: isError }">
      <span class="text-field__label">{{ label }}</span>
      <input
        :placeholder="placeholder"
        class="text-field__input"
        :type="type"
        v-model="value"
        autocomplete="off"
      />
    </span>
    <span v-if="isError" class="text-field__error">
      {{ error }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.text-field {
  @include TextField();
}
</style>
