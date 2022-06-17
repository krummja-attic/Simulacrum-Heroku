import { resolve } from 'path';
import type { UserConfig } from 'vite';

import fs from 'fs-extra';
import matter from 'gray-matter';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components';
import Vue from '@vitejs/plugin-vue';

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

    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, 'utf-8');
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [],
    }),
  ],
  
  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
          next(warning);
      }
    }
  },

  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
}

export default config;
