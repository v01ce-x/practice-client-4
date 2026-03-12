<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { inputVariants } from './input.variants'
import { computed } from 'vue'

interface Props {
  name: string
  type: string
  placeholder?: string
  disabled?: boolean
  error?: string
}

const props = defineProps<Props>()
const model = defineModel()

const styles = computed(() => inputVariants({ hasError: !!props.error }))
</script>

<template>
  <div :class="styles.wrapper()">
    <label :for="name" :class="styles.label()">{{ placeholder }}</label>
    <input
      :id="name"
      v-model="model"
      v-maska="type === 'phone' ? '+7 (###)###-##-##' : ''"
      :type="type"
      :disabled="disabled"
      :class="styles.input()"
    />
  </div>
</template>

<style scoped></style>
