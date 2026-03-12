<script setup lang="ts">
import type { Product } from '@/entities/product'

interface Props {
  product: Product
}

defineProps<Props>()

const URL_IMG = import.meta.env.VITE_API_URL_IMG
</script>

<template>
  <article class="flex flex-col gap-2">
    <img
      :src="URL_IMG + product.image"
      :alt="product.name"
    >
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </article>
</template>

<style scoped></style>
