import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";
import transformerDirective from '@unocss/transformer-directives';


export default defineConfig({
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
    [/^debug-(.*)$/, ([, c]) => `b-1 b-dashed b-${c}`],
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
});
