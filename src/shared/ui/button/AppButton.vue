<script setup lang="ts">
import { buttonVariants, type ButtonVariant } from './button.variants.ts'

interface ButtonProps {
  variant?: ButtonVariant['variant']
  size?: ButtonVariant['size']
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
})
</script>

<template>
  <button :class="buttonVariants({ variant: props.variant, size: 'sm' })">
    <slot />
  </button>
</template>

<style scoped></style>
