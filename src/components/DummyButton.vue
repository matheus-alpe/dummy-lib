<script setup lang="ts">
type Props = {
  label: string
}

defineProps<Props>()
defineEmits(['btnClick', 'btnFocus', 'btnBlur'])
</script>

<template>
  <slot />
  <button
    type="button"
    @click.self="$emit('btnClick', 'btnClick', $event)"
    @focus.self="$emit('btnFocus', 'btnFocus', $event)"
    @blur.self="$emit('btnBlur', 'btnBlur', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
button {
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  padding: 0 1em;
  min-height: 2.5em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: var(--primary-light);

  background-color: var(--bg);
  cursor: pointer;
  transition: opacity 0.25s;
}

button:hover {
  opacity: .9;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
