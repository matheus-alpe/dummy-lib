<script setup lang="ts">
import { DummyButton } from '.';

import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div
      v-if="open"
      class="modal"
      @click.self="open = false"
    >
      <DummyButton @btn-click="open = false" label="x"/>
      <div class="content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background: rgba(3, 3, 3, 0.5);
  backdrop-filter: blur(2px);
}

.content {
  background: #fff;
  border-radius: 5px;
  width: fit-content;
  padding: .5em 1em;
}
</style>
