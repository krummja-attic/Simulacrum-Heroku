<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const theme = computed(() => store.state.siteElements.theme);

function onClick() {
  if (theme.value === "dark")
    store.dispatch("siteElements/setTheme", "light");
  else
    store.dispatch("siteElements/setTheme", "dark");
}
</script>


<template>
  <div class="theme-switch">
    <button 
      @click="onClick"
      class="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
    >
      <svg
        class="sun-and-moon" 
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask class="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          class="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g 
          class="sun-beams" 
          stroke="currentColor"
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  </div>
</template>


<style scoped lang="scss">
@import "https://unpkg.com/open-props/easings.min.css";

/** Basic Styles */

.theme-toggle {
  --size: 2rem;

  background: none;
  border: none;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;

  svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  @media (hover: none) {
    --size: 48px;
  }
}


/** Icon Styles */

.sun-and-moon > :is(.moon, .sun, .sun-beams) {
  transform-origin: center center;
}

/** 
  Color for the icons. The sunbeams must be handled separately with stroke 
  since they cannot be filled.
*/
.sun-and-moon > :is(.moon, .sun) {
  fill: var(--primary-text-color);
}
.sun-and-moon > .sun-beams {
  stroke: var(--primary-text-color);
  stroke-width: 2px;
}


/** Icon Animations */

[theme="light"] .sun-and-moon {
  & > .sun {
    transition: transform, .5s var(--ease-elastic-3);
  }
  & > .sun-beams {
    transition:
      transform .5s var(--ease-elastic-4),
      opacity .5s var(--ease-3)
    ;
  }

  & > .moon > circle {
    transition: transform .25s var(--ease-out-5);
  }
}


[theme="dark"] .sun-and-moon {
  & > .sun {
    transform: scale(1.75);
    transition-timing-function: var(--ease-3);
    transition-duration: .25s;
  }
  & > .sun-beams {
    opacity: 0;
    transform: rotateZ(-25deg);
    transition-duration: .15s;
  }

  & > .moon > circle {
    transform: translateX(-7px);
    transition-delay: .25s;
    transition-duration: .5s;
  }
}
</style>
