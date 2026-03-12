<script setup lang="ts">
import FormInput from './FormInput.vue'

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
  <div>
    <form-input
      v-model="model"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="error"
    />
    <transition>
      <p
        v-if="error"
        class="text-error text-sm mt-1"
      >
        {{ error }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
