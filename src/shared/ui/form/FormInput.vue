<script setup lang="ts">
import { vMaska } from 'maska/vue'

interface Props {
  name: string
  type: string
  placeholder?: string
  disabled?: boolean
  error?: string
}

defineProps<Props>()

const model = defineModel()
</script>

<template>
  <label :for="name">{{ placeholder }}</label>
  <input
    :id="name"
    v-model="model"
    v-maska="type === 'phone' ? '+7 (###)###-##-##' : ''"
    :type="type"
    :disabled="disabled"
  />
</template>

<style scoped></style>
