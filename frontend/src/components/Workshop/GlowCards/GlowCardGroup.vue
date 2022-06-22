<script setup lang="ts">
const el = ref<HTMLElement>()
const refs = useTemplateRefsList()
const rect = computed(() => { return el.value?.getBoundingClientRect()! })

onMounted(() => {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".feature");
  el.value?.addEventListener('pointermove', (ev) => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--x', `${ev.clientX - rect.left}`)
      card.style.setProperty('--y', `${ev.clientY - rect.top}`)
    })
  })
})
</script>

<template lang="pug">
.card-group(ref="el")
  GlowCard(
    v-for="n in 6"
    :key="n"
    :ref="refs.set"
    :rect="rect"
  )
</template>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  position: relative;
}

.card-group {
  margin-top: 48px;
  width: 650px;
  height: auto;
  display: grid;
  column-gap: 0.3rem;
  row-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
</style>
