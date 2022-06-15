import { defineConfig } from 'vite'
import path from 'path';
import Vue from '@vitejs/plugin-vue'
import Markdown, { code, link } from 'vite-plugin-md';
import SSR from 'vite-plugin-ssr/plugin';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    Pages({
      extensions: ['vue', 'md'],
    }),

    Layouts({
      layoutsDirs: './src/layouts',
      defaultLayout: 'default',
    }),

    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup (md) {
        md.use(require('markdown-it-anchor'));
        md.use(require('markdown-it-prism'));
      },
      builders: [
        code({
          theme: 'base'
        }),
        link(),
      ]
    }),

    SSR(),

    Unocss({
      presets: [
        presetAttributify({}),
        presetUno(),
      ]
    }),
  ]
});
