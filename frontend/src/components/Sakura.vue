<!-- 
Based on the lovely visualization implemented by Anthony Fu:
https://github.com/antfu/antfu.me/blob/main/src/components/Plum.vue 
-->

<script setup lang="ts">
import type { Fn } from '@vueuse/core'
import { polarToCartesian, R180, R90, R15, colorFromRGBA } from '@/utilities'
type Canvas = HTMLCanvasElement

const { random } = Math
const el = ref<Canvas | null>(null)
const size = reactive(useWindowSize())
const stopped = ref(false)
const interval = 1000 / 40
const color = '#CC88AA25'
const init = ref(4)
const len = ref(6)

class Visualization {
  public ctx: CanvasRenderingContext2D
  public iterations: number
  public steps: Fn[]

  private prevSteps: Fn[]
  private controls: ReturnType<typeof useRafFn>
  private lastTime: number
  private debug: boolean = false

  public constructor(public canvas: Canvas, width: number, height: number) {
    this.ctx = canvas.getContext('2d')!

    // https://web.dev/canvas-hidipi/
    const dpr: number = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    this.ctx.scale(dpr, dpr)
    
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    this.iterations = 0
    this.steps = []
    this.prevSteps = []
    this.controls = useRafFn(this.frame.bind(this), { immediate: false })
    this.lastTime = 0
  }

  public performance() {
    const delta = performance.now() - this.lastTime
    if (this.debug)
      console.log(delta)
    return delta
  }

  /**
   * Clear the canvas context and flush the `prevSteps` array.
   */
  public clear() {
    const { width, height } = this.canvas
    this.ctx.clearRect(0, 0, width, height)
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = color
    this.prevSteps = []
  }

  /**
   * Step the visualization from start coordinates `(x, y)` using the seed
   * radians value `rad`.
   *
   * @param x Start x coordinate
   * @param y Start y coordinate
   * @param rad Start radians
   */
  public step(x: number, y: number, rad: number) {
    /**
     * Controls the "flow" of the lines
     * The higher the value for `len` the faster and less chaotic the lines
     */
    const length = random() * (len.value * 1.0)
    const [nx, ny] = polarToCartesian(x, y, length, rad)
    
    // Does the actual drawing
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(nx, ny)
    this.ctx.stroke()

    // Controls the "wiggle" of the path as it crawls.
    const rad1 = rad + random() * R15
    const rad2 = rad - random() * R15

    // Clamp the visualization to within a reasonable distance from the edge.
    if (nx < -100 
     || nx > size.width + 100 
     || ny < -100 
     || ny > size.height + 100)
      return
  
    // Branch at random points
    if (this.iterations <= init.value || random() > 0.50)
      this.steps.push(() => this.step(nx, ny, rad1))
    if (this.iterations <= init.value || random() > 0.50)
      this.steps.push(() => this.step(nx, ny, rad2))
  }

  public frame() {
    if (this.performance() < interval)
      return

    this.iterations += 1
    this.prevSteps = this.steps
    this.steps = []

    this.lastTime = performance.now()

    if (!this.prevSteps.length) {
      this.controls.pause()
      stopped.value = true
    }

    this.prevSteps.forEach(draw => draw())
  }

  public start() {
    this.controls.pause()
    this.iterations = 0

    this.clear()

    this.steps = [
      () => this.step(random() * size.width, 0, R90),
      () => this.step(random() * size.width, size.height, -R90),
      () => this.step(0, random() * size.height, 0),
      () => this.step(size.width, random() * size.height, R180)
    ]

    if (size.width < 500)
      this.steps = this.steps.slice(0, 2)

    this.controls.resume()
    stopped.value = false
  }
}

onMounted(async () => {
  const viz = new Visualization(el.value!, size.width, size.height)
  viz.start()
})
</script>

<template lang="pug">
div#canvas
  canvas#ctx(ref="el" width="400" height="400")/
</template>

<style scoped lang="scss">
#canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
}
</style>
