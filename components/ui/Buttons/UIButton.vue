<script lang="ts" setup>
import type {
  UIButtonColorsType,
  UIButtonSizeType,
  UIButtonVariantsType,
} from "~/types/buttons";

type Props = {
  size?: UIButtonSizeType;
  color?: UIButtonColorsType;
  variant?: UIButtonVariantsType;
  alignCenter?: boolean;
  fullWidth?: boolean;
};

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "primary",
  variant: "normal",
  alignCenter: false,
  fullWidth: false,
});
</script>

<template>
  <button
    class="ui-button"
    :class="{
      _md: size === 'md',
      _lg: size === 'lg',
      _primary: color === 'primary',
      _secondary: color === 'secondary',
      _success: color === 'success',
      _normal: variant === 'normal',
      _ghost: variant === 'ghost',
      _center: alignCenter,
      _fullWidth: fullWidth,
    }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.ui-button {
  @include UIButton;
}
</style>
