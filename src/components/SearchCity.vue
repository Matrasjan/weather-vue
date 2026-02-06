<template>
  <el-input
      v-model="city"
      placeholder="Введите город"
      @keyup.enter="search"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'search', city: string): void }>()
const city = ref('')

const search = () => {
  if (city.value.trim()) emit('search', city.value)
}
</script>
