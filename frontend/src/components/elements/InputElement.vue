<script setup>
/* eslint-disable no-unused-vars */
import { ref, defineProps, defineEmits, computed, getCurrentInstance } from 'vue';
import { uid } from '@/helpers/uid';

const props = defineProps({
  color: { 
    type: String,
    default: ""
  },
  isClearable: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  name: {
    type: [String, Number],
    default () {
      return uid('input');
    }
  },
  plaintext: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: [Number, String],
    default: 0
  },
  type: {
    type: String,
    default: 'text'
  }
});

const emit = defineEmits(['update:modelValue', 'clear']);

const parent = getCurrentInstance();

const input = ref(null);

const classes = computed(() => {
  return {}
});

const tabIndex = computed(() => {
  return props.isDisabled ? -1 : props.tabIndex
});

const isClearable = computed(() => {
  return props.isClearable && !props.isDisabled && props.value !== '';
});

const value = computed(() => {
  return props.modelValue;
});

const onInput = (event) => {
  parent.onInput?.(props.name, event.target.value);
  emit('update:modelValue', event.target.value);
};

const onClear = (event) => {
  emit('update:modeValue', '');
  emit('clear', event);
};

const focus = () => {
  input.focus();
};
</script>


<template>
  <div class="input-element-container">
    <input 
      :id="id"
      ref="input"
      :type="type"
      v-bind="$attrs"
      :value="value"
      :tabIndex="tabIndex"
      :disabled="isDisabled"
      @input="onInput"
      @blur="onBlur"
    >
  </div>
</template>


<style lang="scss" scoped>
.input-element-container {
  display: block;
  vertical-align: middle;
  position: relative;

  input {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    flex-direction: row;

    padding: 5px;

    background-clip: padding-box;
    border-width: var(--border-width);
    border-style: var(--border-style);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: 2px 2px var(--bg-secondary);
    background-color: var(--bg-secondary);
    color: var(--fg-primary);
    font-size: 14px;
    font-family: var(--body-font-family);

    &:hover {
      border-color: var(--accent-3);
    }

    &::placeholder {
      opacity: 0.3;
    }
  }
}
</style>
