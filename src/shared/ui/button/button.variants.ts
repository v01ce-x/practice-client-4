import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'px-12 py-3',
  variants: {
    variant: {
      primary: 'bg-green-500',
      secondary: 'bg-red-500',
    },
  },
})

export type ButtonVariant = VariantProps<typeof buttonVariants>
