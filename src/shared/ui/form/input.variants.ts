import { tv, type VariantProps } from 'tailwind-variants'

export const inputVariants = tv({
  slots: {
    wrapper: 'flex flex-col gap-2.5',
    label: 'text-sm font-semibold text-surface-700 ml-1',
    input: 'w-full px-5 py-3.5 rounded-xl border-2 border-surface-300 bg-white text-surface-900 placeholder:text-surface-400 transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-200/50 focus:shadow-lg focus:shadow-primary-200/40 disabled:bg-surface-100 disabled:cursor-not-allowed hover:border-surface-400',
    error: 'text-sm text-error font-medium ml-1',
  },
  variants: {
    hasError: {
      true: {
        input: 'border-error focus:border-error focus:ring-red-100/60 focus:shadow-red-100/50',
      },
    },
  },
})

export type InputVariant = VariantProps<typeof inputVariants>
