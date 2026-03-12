import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 border-0',
  variants: {
    variant: {
      primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5',
      secondary: 'bg-white text-primary-700 border-2 border-primary-400 hover:bg-primary-50 hover:border-primary-500 shadow-md hover:shadow-lg',
      ghost: 'bg-transparent text-primary-700 hover:bg-primary-100/80 hover:text-primary-800',
      danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40',
    },
    size: {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariant = VariantProps<typeof buttonVariants>
