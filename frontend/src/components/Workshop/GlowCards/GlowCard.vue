<template lang="pug">
.feature
  a.feature-content(href="#")
    strong Some feature 
    span Description of the awesome feature
</template>

<style scoped lang="scss">
.feature {
  --x-px: calc(var(--x) * 1px);
  --y-px: calc(var(--y) * 1px);
  --border: 2px;
  background: rgba(255, 255, 255, 0.125);
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100px;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    inset: 0px;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: radial-gradient(
      800px circle at var(--x-px) var(--y-px),
      rgba(255, 255, 255, 0.125),
      transparent 60%
    );
  }

  &:before {
    z-index: 1;
  }

  &::after {
    opacity: 0;
    z-index: 2;
    transition: opacity 0.25s ease;
  }

  &:hover:after {
    opacity: 1;
  }
}

.feature-content {
  background: rgb(19, 19, 21);
  border-radius: inherit;
  color: white;
  text-decoration: none;
  z-index: 1;
  position: absolute;
  inset: var(--border);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 0.5rem;
  padding: 0 1rem 0 2rem;

  > strong {
    align-self: self-end;
    font-size: 125%;
  }

  > span {
    opacity: 0.7;
  }
}
</style>
