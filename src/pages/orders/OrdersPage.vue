<script setup lang="ts">
import { useOrder } from '@/entities/order'

const { data: orders, isLoading } = useOrder()
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-primary-900 mb-6">
      Мои заказы
    </h1>

    <div v-if="isLoading" class="text-center py-12">
      <p class="text-surface-600 text-lg">Загрузка...</p>
    </div>

    <div
      v-else-if="orders && orders.length > 0"
      class="space-y-4"
    >
      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-primary-200/60 p-6 hover:shadow-2xl hover:border-primary-300 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-primary-900 mb-1">
              Заказ #{{ order.id }}
            </h3>
            <p class="text-surface-600 text-sm">
              Товаров: {{ order.products.length }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-sm text-surface-500 mb-1">Сумма заказа</p>
            <p class="text-2xl font-bold text-primary-600">
              {{ order.order_price }} ₽
            </p>
          </div>
        </div>

        <div class="border-t border-surface-200 pt-4">
          <p class="text-sm text-surface-600">
            ID товаров: {{ order.products.join(', ') }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-else
      class="text-center py-12"
    >
      <p class="text-surface-600 text-lg mb-4">
        У вас пока нет заказов
      </p>
      <router-link to="/">
        <button
          class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Перейти к покупкам
        </button>
      </router-link>
    </div>
  </div>
</template>
