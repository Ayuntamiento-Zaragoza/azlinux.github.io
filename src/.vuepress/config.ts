import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  lang: 'es-ES',
  title: 'AZLinux',
  description:
    'Distribución Linux del Ayuntamiento de Zaragoza para los empleados municipales',

  theme,

  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 10,
      getExtraFields: () => [],
      locales: {
        '/': {
          placeholder: 'Buscar',
        },
      },
    }),
  ],

  head: [
    // Import the corresponding link
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Sanchez:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
})
