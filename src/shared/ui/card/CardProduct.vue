<script setup lang="ts">
import { type Product } from '@/entities/product'
import { useAddToCart } from '@/entities/cart'
import { AppButton } from '@/shared/ui'
import { useAuth } from '@/shared/composables'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const { isAuth } = useAuth()
const { mutateAsync } = useAddToCart()
const URL_IMG = import.meta.env.VITE_API_URL_IMG

const onSubmit = () => {
  mutateAsync(props.product.id)
}
</script>

<template>
  <article class="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary-200/60 hover:shadow-2xl hover:shadow-primary-400/20 transition-all duration-300 hover:-translate-y-1 flex flex-col">
    <div class="relative overflow-hidden aspect-video bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      <img
        :src="URL_IMG + product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-primary-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div class="p-5 flex flex-col gap-3 flex-1 bg-gradient-to-b from-white to-primary-50/30">
      <h3 class="text-xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors leading-tight">
        {{ product.name }}
      </h3>

      <p class="text-surface-600 text-sm line-clamp-2 flex-1 leading-relaxed">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mt-2 pt-3 border-t border-primary-100">
        <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
          {{ product.price }} ₽
        </span>
      </div>

      <app-button v-if="isAuth" variant="primary" size="md" @click="onSubmit" class="w-full mt-2 shadow-lg">
        В корзину
      </app-button>
    </div>
  </article>
</template>

<style scoped></style>
