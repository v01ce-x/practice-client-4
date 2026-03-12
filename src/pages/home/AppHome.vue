<script setup lang="ts">
import { ListProducts } from '@/widgets/products'
import { useCarts } from '@/entities/cart'

const { data: carts } = useCarts()
</script>

<template>
  <list-products />
  {{ carts }}
</template>

<style scoped></style>
