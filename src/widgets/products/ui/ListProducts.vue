<script setup lang="ts">
import { useProduct } from '@/entities/product'
import { CardProduct } from '@/shared/ui'

const { data: products } = useProduct()
</script>

<template>
  <div v-for="product of products" :key="product.id">
    <card-product :product="product" />
  </div>
</template>

<style scoped></style>
