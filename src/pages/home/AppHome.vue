<script setup lang="ts">
import { ListProducts } from '@/widgets/products'
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-bold bg-linear-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent mb-4">
        Наши товары
      </h1>
      <p class="text-surface-600 text-lg">
        Выберите то, что вам понравится
      </p>
    </div>

    <list-products />
  </div>
</template>

<style scoped></style>
