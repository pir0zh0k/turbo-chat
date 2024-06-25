<script setup lang="ts">
defineProps<{
  name: string;
  label?: string;
  placeholder?: string;
  error?: string | null;
}>();
const emits = defineEmits(["clearError"]);
const value = defineModel();
</script>

<template>
  <label class="text-field">
    <span class="text-field__body">
      <span class="text-field__label">{{ label }}</span>
      <input
        :placeholder="placeholder"
        class="text-field__input"
        type="password"
        v-model="value"
        @input="$emit('clearError')"
      />
    </span>
    <span v-if="error" class="text-field__error">
      {{ error }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.text-field {
  @include TextField();
}
</style>
