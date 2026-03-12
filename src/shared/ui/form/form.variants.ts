import { tv, type VariantProps } from 'tailwind-variants'

export const formVariants = tv({
  slots: {
    container: 'w-[480px] bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-primary-900/10 p-10 border border-primary-200/50',
    title: 'text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2',
    subtitle: 'text-surface-600 mb-8 text-lg',
    form: 'flex flex-col gap-6',
    footer: 'mt-8 text-center text-sm text-surface-600',
    link: 'text-primary-600 hover:text-primary-700 font-semibold transition-colors hover:underline underline-offset-2',
  },
})

export type FormVariant = VariantProps<typeof formVariants>
