import { defineConfig } from 'windicss/helpers'

const defaultTheme = require('windicss/defaultTheme');
const forms = require('windicss/plugin/forms');
const typography = require('windicss/plugin/typography')
const line_clamp = require('windicss/plugin/line-clamp');

export default defineConfig({
    extract: {
        include: ['resources/**/*.{vue,blade,jsx}'],
    },
    darkMode: 'class',
    plugins: [forms, typography, line_clamp],
    safelist: 'text-underline',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    shortcuts: {
        'grid-responsive-span': 'col-span-12 md:(col-start-2 col-span-10) xl:(col-start-4 col-span-6)',
    }
});