import { resolve } from 'path'
import type { UserConfig } from 'vite'

import fs from 'fs-extra'
import matter from 'gray-matter'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Markdown, { link } from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

const config: UserConfig = {

  resolve: {
    alias: [
      { find: '@/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    Unocss(),

    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      dirs: [
        { dir: 'pages', baseRoute: '' },
      ],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      },
    }),

    Markdown({
      wrapperComponent: 'Post',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(Prism)
      },
      builders: [
        // code({
        //   theme: 'base',
        // }),
        link(),
      ],
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [],
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
      ],
    }),
  ],

  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
          next(warning)
      },
    },
  },

  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
}

export default config
