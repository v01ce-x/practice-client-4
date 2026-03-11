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
  <div class="flex flex-col gap-2">
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
        class="block text-error text-[14px]"
      >
        {{ error }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  opacity: 0;
  max-height: 0;
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
  opacity: 1;
  max-height: 16px;
}
</style>
