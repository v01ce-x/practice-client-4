<script setup lang="ts">
import { useForm } from 'vee-validate'
import { type RegisterFormValues, registerSchema } from '../lib/validation.ts'
import { FormField, AppButton } from '@/shared/ui'
import { useRegister } from '@/entities/account'
import { formVariants } from '@/shared/ui/form/form.variants'

const { defineField, handleSubmit, errors } = useForm<RegisterFormValues>({
  validationSchema: registerSchema,
})

const { mutateAsync, isLoading } = useRegister()

const [fio, fioAttrs] = defineField('fio')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const userRegister = handleSubmit((values) => {
  mutateAsync({
    ...values
  })
})

const styles = formVariants()
</script>

<template>
  <div :class="styles.container()">
    <h2 :class="styles.title()">Регистрация</h2>
    <p :class="styles.subtitle()">Создайте новый аккаунт</p>

    <form @submit.prevent="userRegister" :class="styles.form()">
      <form-field
        v-model="fio"
        v-bind="fioAttrs"
        name="user-fio"
        type="text"
        placeholder="ФИО"
        :error="errors.fio"
      />

      <form-field
        v-model="email"
        v-bind="emailAttrs"
        name="user-email"
        type="email"
        placeholder="Email"
        :error="errors.email"
      />

      <form-field
        v-model="password"
        v-bind="passwordAttrs"
        name="user-password"
        type="password"
        placeholder="Пароль"
        :error="errors.password"
      />

      <app-button type="submit" :disabled="isLoading" variant="primary" size="lg" class="w-full mt-2">
        {{ isLoading ? 'Регистрация...' : 'Зарегистрироваться' }}
      </app-button>
    </form>

    <p :class="styles.footer()">
      Уже есть аккаунт?
      <router-link to="/login" :class="styles.link()">Войти</router-link>
    </p>
  </div>
</template>

<style scoped></style>
