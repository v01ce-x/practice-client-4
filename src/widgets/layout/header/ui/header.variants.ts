import { tv, type VariantProps } from 'tailwind-variants'

export const headerVariants = tv({
  slots: {
    header: 'bg-white/80 backdrop-blur-md border-b border-primary-100/50 shadow-lg shadow-primary-900/5 flex justify-center items-center',
    container: 'max-w-[1440px] w-full px-8 py-5 flex items-center justify-between',
    logo: 'flex items-center gap-3 text-primary-700 hover:text-primary-800 transition-all duration-300 hover:scale-105',
    logoText: 'text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent',
    nav: 'flex items-center gap-4',
    tokenBadge: 'px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 rounded-full text-sm font-semibold shadow-sm',
  },
})

export type HeaderVariant = VariantProps<typeof headerVariants>
