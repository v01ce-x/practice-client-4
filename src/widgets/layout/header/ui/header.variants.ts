import { tv, type VariantProps } from 'tailwind-variants'

export const headerVariants = tv({
  slots: {
    header: 'bg-white/95 backdrop-blur-md border-b border-primary-200/60 shadow-xl shadow-primary-500/10 flex justify-center items-center sticky top-0 z-50',
    container: 'max-w-[1440px] w-full px-8 py-5 flex items-center justify-between',
    logo: 'flex items-center gap-3 text-primary-700 hover:text-primary-600 transition-all duration-300 hover:scale-105',
    logoText: 'text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent',
    nav: 'flex items-center gap-4',
    tokenBadge: 'px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 rounded-full text-sm font-semibold shadow-sm border border-primary-300/30',
  },
})

export type HeaderVariant = VariantProps<typeof headerVariants>
