import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue3-other",
  description: "vue3方便的hooks与组件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'api', link: '/useRafInterval' }
    ],

    sidebar: [
      {
        text: '安装',
        items: [
          { text: '快速上手', link: '/markdown-examples' },

        ]
      },
      {
        text: 'api',
        items: [
          { text: 'useRafInterval', link: '/useRafInterval' },
          { text: 'useSelectable', link: '/useSelectable' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/Action-laoxu/vue3-other' }
    ]
  }
})
