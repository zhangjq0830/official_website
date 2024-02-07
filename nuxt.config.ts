export default defineNuxtConfig({
  // 开发工具
  devtools: { enabled: false },
  // 模块
  app: {
    head: {
      charset: 'utf-8',
      title: '亚诺隆德科技有限公司官方网站',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [{ name: 'description', content: '亚诺隆德科技有限公司官方网站' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  // 模块
  modules: ['@nuxtjs/tailwindcss'],
  // 开发服务器配置
  devServer: {
    port: 3010
  },
  // typescript配置
  typescript: {
    typeCheck: true,
    strict: true
  }
});
