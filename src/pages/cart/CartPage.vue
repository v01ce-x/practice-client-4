<script setup lang="ts">
import { useCarts, useRemoveToCart, usePlacingOrder, type Cart } from '@/entities/cart'
import { AppButton } from '@/shared/ui'
import { computed } from 'vue'

const { data: carts } = useCarts()
const { mutateAsync: removeFromCart } = useRemoveToCart()
const { mutateAsync: placingOrder } = usePlacingOrder()
const URL_IMG = import.meta.env.VITE_API_URL_IMG

const groupedCarts = computed(() => {
  if (!carts.value) return []

  const grouped: Record<number, { cart: Cart; count: number; ids: number[] }> = {}

  carts.value.forEach((cart: Cart) => {
    const productId = cart.product_id
    if (grouped[productId]) {
      grouped[productId].count++
      grouped[productId].ids.push(cart.id)
    } else {
      grouped[productId] = { cart, count: 1, ids: [cart.id] }
    }
  })

  return Object.values(grouped)
})

const totalPrice = computed(() => {
  return groupedCarts.value.reduce((sum, item) => {
    return sum + item.cart.price * item.count
  }, 0)
})

const handleRemove = (cartId: number) => {
  removeFromCart(cartId)
}

const onSubmit = () => {
  placingOrder()
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-primary-900 mb-6">
      Корзина
    </h1>

    <div
      v-if="carts && carts.length > 0"
      class="space-y-6"
    >
      <div class="space-y-4">
        <div
          v-for="item in groupedCarts"
          :key="item.cart.product_id"
          class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-primary-200/60 p-6 flex gap-6 items-center hover:shadow-2xl hover:border-primary-300 transition-all duration-300"
        >
          <div class="relative">
            <img
              :src="URL_IMG + item.cart.image"
              :alt="item.cart.name"
              class="w-28 h-28 object-cover rounded-xl shadow-md"
            >
            <div
              v-if="item.count > 1"
              class="absolute -top-2 -right-2 bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg"
            >
              {{ item.count }}
            </div>
          </div>

          <div class="flex-1">
            <h3 class="text-xl font-bold text-primary-900 mb-1">
              {{ item.cart.name }}
            </h3>
            <p class="text-surface-600 text-sm mb-3">
              {{ item.cart.description }}
            </p>
            <div class="flex items-center gap-4">
              <p class="text-lg font-semibold text-primary-700">
                {{ item.cart.price }} ₽
              </p>
              <span
                v-if="item.count > 1"
                class="text-surface-500 text-sm"
              >× {{ item.count }}</span>
              <p
                v-if="item.count > 1"
                class="text-xl font-bold text-primary-600"
              >
                = {{ item.cart.price * item.count }} ₽
              </p>
            </div>
          </div>

          <app-button
            variant="danger"
            size="sm"
            @click="handleRemove(item.ids[0]!)"
          >
            Удалить
          </app-button>
        </div>
      </div>

      <div
        class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-primary-200/60 p-6"
      >
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold text-primary-900">Итого:</span>
          <span
            class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
          >
            {{ totalPrice }} ₽
          </span>
        </div>

        <app-button @click="onSubmit()">
          Оформить заказ
        </app-button>
      </div>
    </div>

    <div
      v-else
      class="text-center py-12"
    >
      <p class="text-surface-600 text-lg">
        Корзина пуста
      </p>
      <router-link to="/">
        <app-button
          variant="primary"
          size="md"
          class="mt-4"
        >
          Перейти к покупкам
        </app-button>
      </router-link>
    </div>
  </div>
</template>
