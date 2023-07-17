import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme({
  hostname: 'https://azlinux.github.io',

  author: {
    name: 'AZLinux',
  },

  editLink: false,
  lastUpdated: false,
  contributors: false,

  docsDir: 'src',
  logo: '/azlinux.svg',

  navbar,

  sidebar,
  sidebarSorter: ['readme', 'order', 'date-desc', 'filename'],

  footer: '© 2009-hoy AZLinux',
  copyright: false,

  displayFooter: true,

  blog: {
    medias: {
      //GitHub: 'https://github.com/migasfree',
      Twitter: 'https://twitter.com/azlinux',
    },
    sidebarDisplay: 'always',
  },

  plugins: {
    blog: {
      excerptLength: 0,
      article: '/blog/',
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,
      type: [
        {
          key: 'post',
          filter: ({ filePathRelative, frontmatter }) => {
            if (!filePathRelative) return false

            if (!filePathRelative.includes('/posts/')) return false

            if (
              frontmatter.home ||
              frontmatter.layout ||
              frontmatter.timeline === false
            )
              return false

            return true
          },
        },
      ],
    },

    components: {
      components: ['FontIcon', 'PDF', 'SiteInfo', 'YouTube'],
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
    },
  },
})
