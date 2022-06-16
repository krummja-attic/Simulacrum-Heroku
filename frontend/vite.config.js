// Vite Core
import { defineConfig } from 'vite';

// Vite Plugins
import Vue from '@vitejs/plugin-vue';
import SSR from 'vite-plugin-ssr/plugin';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-md';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';
import { code, link } from 'vite-plugin-md';

// Utilities
import path from 'path';


export default defineConfig({
  
  // RESOLVE =================================================================
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },

  // PLUGINS =================================================================
  plugins: [

    // Vue -------------------------------------------------------------------
    Vue({
      include: [
        /\.vue$/, 
        /\.md$/
      ],
      reactivityTransform: true,
    }),

    /**
     * Server-Side Rendering -------------------------------------------------
     * Like Next.js / Nuxt but as do-one-thing-do-it-well Vite plugin
     */
    SSR(),

    /**
     * Vite Pages ------------------------------------------------------------
     * File system based routing for Vue 3 / React applications using Vite
     */
    Pages({
      extensions: [
        'vue', 
        'md'
      ],
    }),

    /**
     * Vite Layouts ----------------------------------------------------------
     * Layouts are stored in `/src/layouts/` folder by default and are
     * standard Vue components with a `<router-view />` in the template
     */
    Layouts({
      layoutsDirs: './src/layouts',
      defaultLayout: 'default',
    }),
    
    /**
     * Vite Markdown ---------------------------------------------------------
     * Use Markdown as Vue components; use Vue components in Markdown
     */
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
        md.use(require('markdown-it-theme'), {
          theme: 'sakura',
          alias: function (theme, tag) {
            return theme + "-" + tag;
          }
        });
      },
      builders: [
        code({
          theme: 'base'
        }),
        link(),
      ]
    }),

     /** 
     * Unplugin AutoImport --------------------------------------------------- 
     * Auto import APIs on-demand for Vite, Webpack, Rollup with esbuild
     */
    AutoImport({
      imports: [
        'vue', 
        'vue-router', 
        '@vueuse/head', 
        '@vueuse/core'
      ],
    }),

    /** 
     * Unplugin Components ---------------------------------------------------
     * On-demand components auto importing for Vue
     */
    Components({
      extensions: [
        'vue', 
        'md'
      ],
      include: [
        /\.vue$/, 
        /\.vue\?vue/, 
        /\.md$/
      ],
    }),

    /**
     * UnoCSS ----------------------------------------------------------------
     * The instant on-demand Atomic CSS engine
     */
    Unocss({
      presets: [
        presetAttributify({}),
        presetUno(),
      ],
    
      shortcuts: [
        // Static rules
        {
          btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
        },
    
        // Dynamic rules
        //// debug-{colorname}
        [/^debug-(.*)$/, ([, c]) => `b-2 b-dashed b-${c}`],
      ],
      
      rules: [
        [/^bg-(.*)$/, ([, c], { theme }) => {
          if (theme.colors[c])
            return { color: theme.colors[c] }
        }],
    
        [/^text-(.*)$/, ([, c], { theme }) => {
          if (theme.colors[c])
            return { color: theme.colors[c] }
        }]
      ],
    
      theme: {
        colors: {
          'deepnight': {
            'dark': 'rgb(39, 37, 37)',
            'normal': 'rgb(53, 49, 50)',
            'light': 'rgb(66, 62, 63)',
            'lighter': 'rgb(103, 101, 102)',
          },
          'overcast': {
            'light': 'rgb(249, 240, 244)',
            'normal': 'rgb(235, 229, 231)',
            'dark': 'rgb(220, 214, 216)',
          },
          'cherryblossom': {
            'lighter': 'rgb(241, 193, 207)',
            'light': 'rgb(232, 155, 177)',
            'normal': 'rgb(224, 123, 150)',
           'dark': 'rgb(215, 101, 128)',
          },
          "sunset": {
            'red': 'rgb(224, 77, 80)',
            'orange': 'rgb(224, 150, 118)',
            'yellow': 'rgb(224, 199, 154)',
            'green': 'rgb(190, 223, 169)',
            'blue': 'rgb(148, 181, 224)',
          },
          
          breakpoints: {
            xs: '320px',
            sm: '640px',
          }
        }
      },
    
      transformers: [
        transformerDirective(),
      ]
    }),
  ]
});
