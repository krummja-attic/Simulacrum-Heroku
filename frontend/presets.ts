import type { Preset } from '@unocss/core'
import type { IconsOptions } from './types'

export const iconPreset = (options: IconsOptions = {}): Preset => {
  return {
    name: 'preset-icons',
    enforce: 'pre',
    options,
    layers: { icons: -30 },
    rules: [],
  }
}
