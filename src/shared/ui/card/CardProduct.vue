<script setup lang="ts">
import { type Product, useAddToCart } from '@/entities/product'
import { AppButton } from '@/shared/ui'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const { mutateAsync } = useAddToCart()
const URL_IMG = import.meta.env.VITE_API_URL_IMG

const onSubmit = () => {
  mutateAsync(props.product.id)
}
</script>

<template>
  <article class="flex flex-col gap-2">
    <img :src="URL_IMG + product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <app-button variant="primary" size="lg" @click="onSubmit"> В корзину </app-button>
  </article>
</template>

<style scoped></style>
