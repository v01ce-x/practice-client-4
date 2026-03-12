<script setup lang="ts">
import { type Product } from '@/entities/product'
import { useAddToCart } from '@/entities/cart'
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
  <article class="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-primary-900/10 overflow-hidden border border-primary-100/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-2 flex flex-col">
    <div class="relative overflow-hidden aspect-square bg-gradient-to-br from-primary-50 to-primary-100">
      <img
        :src="URL_IMG + product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div class="p-6 flex flex-col gap-3 flex-1">
      <h3 class="text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
        {{ product.name }}
      </h3>

      <p class="text-surface-600 text-sm line-clamp-2 flex-1">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mt-2">
        <span class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
          {{ product.price }} ₽
        </span>
      </div>

      <app-button variant="primary" size="lg" @click="onSubmit" class="w-full mt-2">
        В корзину
      </app-button>
    </div>
  </article>
</template>

<style scoped></style>
