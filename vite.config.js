// Vite Core
import { defineConfig } from 'vite';

// Vite Plugins
import Vue from '@vitejs/plugin-vue';
import SSR from 'vite-plugin-ssr/plugin';
import Pages from 'vite-plugin-pages';
import Markdown from 'vite-plugin-md';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';
import { code, link } from 'vite-plugin-md';

// Utilities
import path, { resolve } from 'path';
import fs from 'fs-extra';
import matter from 'gray-matter';


export default defineConfig({
  
  // BUILD ===================================================================
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        inlineDynamicImports: false
      }
    },
  },

  ssgOptions: {
    format: 'cjs',
    formatting: 'minify'
  },

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
    // SSR(),

    /**
     * Vite Pages ------------------------------------------------------------
     * File system based routing for Vue 3 / React applications using Vite
     */
    Pages({
      extensions: [
        'vue', 
        'md'
      ],
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
      ],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        console.log(path);
        const md = fs.readFileSync(path, 'utf-8');
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      }
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
    Unocss(),
  ]
});
