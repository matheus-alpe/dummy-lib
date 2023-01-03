<script setup lang="ts">
type Props = {
  name: string
  id: string
  label: string
  labelLeft?: boolean
}

defineEmits(['checkChange'])
defineProps<Props>()
</script>

<template>
  <label :for="id">
    {{ labelLeft ? label : null }}
    <input
      type="checkbox"
      :name="name"
      :id="id"
      @change="$emit('checkChange', 'checkChange', $event)"
    />
    {{ !labelLeft ? label : null }}
  </label>
</template>

<style scoped></style>
