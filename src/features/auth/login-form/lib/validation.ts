import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const loginSchemaRaw = z.object({
  email: z
    .string({ required_error: 'Поле обязательное' })
    .email('Некорректный формат email'),

  password: z
    .string({ required_error: 'Поле обязательное' })
    .min(8, { message: 'Минимум 8 символов' })
    .max(80, { message: 'Максимум 80 символов' })
    .regex(/[0-9]/, { message: 'Должна быть хотя бы одна цифра' }),
})

export const loginSchema = toTypedSchema(loginSchemaRaw)
export type LoginFormValues = z.infer<typeof loginSchemaRaw>
