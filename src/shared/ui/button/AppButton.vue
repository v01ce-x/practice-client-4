<script setup lang="ts">
import { buttonVariants, type ButtonVariant } from './button.variants.ts'

interface ButtonProps {
  variant: ButtonVariant['variant']
}

defineProps<ButtonProps>()
</script>

<template>
  <button :class="buttonVariants({ variant: variant })">
    <slot />
  </button>
</template>

<style scoped></style>
