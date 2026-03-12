<script setup lang="ts">
import { useProduct } from '@/entities/product'
import { CardProduct } from '@/shared/ui'

const { data: products } = useProduct()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <card-product v-for="product of products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped></style>
