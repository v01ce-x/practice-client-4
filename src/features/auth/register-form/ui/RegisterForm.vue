<script setup lang="ts">
import { useForm } from 'vee-validate'
import { type RegisterFormValues, registerSchema } from '../lib/validation.ts'
import { FormField } from '@/shared/ui'
import { useRegister } from '@/entities/account'

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
</script>

<template>
  <form @submit.prevent="userRegister">
    <form-field
      v-model="fio"
      v-bind="fioAttrs"
      name="user-fio"
      type="text"
      placeholder="Введите ФИО"
      :error="errors.fio"
    />

    <form-field
      v-model="email"
      v-bind="emailAttrs"
      name="user-email"
      type="email"
      placeholder="Введите почту"
      :error="errors.email"
    />

    <form-field
      v-model="password"
      v-bind="passwordAttrs"
      name="user-password"
      type="password"
      placeholder="Введите пароль"
      :error="errors.password"
    />

    <button :disabled="isLoading">Зарегистрироваться</button>
  </form>
</template>

<style scoped></style>
