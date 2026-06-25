const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default {
  compatibilityDate: '2026-06-14',
  modules: [['@nuxtjs/robots', { robotsTxt: baseURL === '/' }]],
  css: ['~/assets/styles/main.less'],
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/zh-cn', '/zh-tw', '/ja', '/ko', '/en'],
    },
  },
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      title: '小语文稿 - Moeka',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '小语文稿 Moeka 是一款优雅、流畅、本地优先的 Markdown 编辑应用。',
        },
        { property: 'og:title', content: '小语文稿 - Moeka' },
        {
          property: 'og:description',
          content: '言渡四海，意会千山。为重度写作者打造的高性能 Markdown 编辑体验。',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          math: 'always',
        },
      },
    },
  },
}
