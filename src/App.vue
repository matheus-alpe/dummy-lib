<script setup lang="ts">
import { DummyButton, DummyCheckbox, DummyModal } from './components'

function log() {
  console.log(...arguments)
}
</script>

<template>
  <div>
    <DummyButton
      label="Button"
      @btn-click="log"
      @btn-focus="log"
      @btn-blur="log"
    />

    <DummyCheckbox
      label="Checkbox"
      id="test1"
      name="teste"
      label-left
      @check-change="log"
    />

    <DummyCheckbox
      label="Checkbox"
      id="test2"
      name="teste"
      @check-change="log"
    />

    <DummyModal>
      <div>
        <h1>Modal</h1>
      </div>
    </DummyModal>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
</style>
