import { resolve } from 'path'
import type { UserConfig } from 'vite'

import fs from 'fs-extra'
import matter from 'gray-matter'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import Anchor from 'markdown-it-anchor'
// @ts-expect-error missing types
import Katex from 'markdown-it-katex'
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import transformerDirective from '@unocss/transformer-directives'
// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'

import { slugify } from './scripts/slugify'

import {
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-javadoc'
import 'prismjs/components/prism-jsdoc'

import { customElements } from './custom-elements'
import anchor from 'markdown-it-anchor'

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
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
    exclude: [

    ],
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
      template: {
        compilerOptions: {
          isCustomElement: tag => customElements.includes(tag),
        },
      },
    }),

    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          extraProperties: {
            opacity: '0.8',
          },
        }),
      ],

      shortcuts: [
        [/^debug-(.*)$/, ([, c]) => `b-1 b-dashed b-${c}`],
      ],

      rules: [],

      theme: {
        colors: {
          gray: '#333333',
          auxiliary: {
            pale: '#F7F3EF',
          },
          deepnight: {
            dark: 'rgb(39, 37, 37)',
            normal: 'rgb(53, 49, 50)',
            light: 'rgb(66, 62, 63)',
            lighter: 'rgb(103, 101, 102)',
          },
          overcast: {
            light: 'rgb(249, 240, 244)',
            normal: '#ebe5e7',
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
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        md.use(Prism, {
          plugins: [
            'show-language',
          ],
        }),

        md.use(Anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        }),

        md.use(Katex, {
          throwOnError: false,
          errorColor: ' #cc0000',
        }),

        md.use(TOC, {
          includeLevel: [1, 2, 3],
          slugify,
        })
      },
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
          enabledCollections: [
            'carbon',
            'mdi',
            'ri',
          ],
        }),
      ],
    }),

    Icons({
      autoInstall: true,
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
      external: [
        '@vueuse/integrations',
      ],
    },
  },

  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
}

export default config
