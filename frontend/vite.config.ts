import { resolve } from 'path'
import type { UserConfig } from 'vite'

import fs from 'fs-extra'
import matter from 'gray-matter'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Markdown, { code, link } from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import transformerDirective from '@unocss/transformer-directives'
import {
  presetAttributify,
  presetUno,
} from 'unocss'

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

    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
      ],
      shortcuts: [
        [/^debug-(.*)$/, ([, c]) => `b-2 b-dashed b-${c}`],
      ],
      rules: [],
      theme: {
        colors: {
          deepnight: {
            dark: 'rgb(39, 37, 37)',
            normal: 'rgb(53, 49, 50)',
            light: 'rgb(66, 62, 63)',
            lighter: 'rgb(103, 101, 102)',
          },
          overcast: {
            light: 'rgb(249, 240, 244)',
            normal: 'rgb(235, 229, 231)',
            dark: 'rgb(220, 214, 216)',
          },
          cherryblossom: {
            lighter: 'rgb(241, 193, 207)',
            light: 'rgb(232, 155, 177)',
            normal: 'rgb(224, 123, 150)',
            dark: 'rgb(215, 101, 128)',
          },
          sunset: {
            red: 'rgb(224, 77, 80)',
            orange: 'rgb(224, 150, 118)',
            yellow: 'rgb(224, 199, 154)',
            green: 'rgb(190, 223, 169)',
            blue: 'rgb(148, 181, 224)',
          },

          breakpoints: {
            xs: '320px',
            sm: '640px',
          },
        },
      },
      transformers: [
        transformerDirective(),
      ],
    }),

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
        code({
          theme: 'base',
        }),
        link(),
      ],
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub',
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
