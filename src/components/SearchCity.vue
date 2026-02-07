<template>
  <div class="search-wrapper">
    <el-input
        v-model="city"
        placeholder="Введите город"
        @keyup.enter="search"
        clearable
        @clear="clearInput"
        class="city-input"
    >
      <template #append>
        <div v-if="loading" class="loader-wrapper">
          <el-icon class="loader-icon">
            <Loading />
          </el-icon>
        </div>
        <el-button v-if="loading" icon="Loading" circle></el-button>
        <el-button @click="search" class="search-button">Поиск</el-button>
      </template>
    </el-input>
    <el-alert
        v-if="error"
        type="error"
        :title="error"
        class="error-message"
        show-icon
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {defineEmits, defineProps } from 'vue'
import { Loading } from '@element-plus/icons-vue'

defineProps<{
  loading?: boolean
  error?: string
}>()

const emit = defineEmits<{ (e: 'search', city: string): void }>()

const city = ref('')

const search = () => {
  const searchValue = city.value.trim()
  if (searchValue) emit('search', searchValue)
}

const clearInput = () => {
  city.value = ''
  emit('search', '')
}
</script>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.city-input {
  font-size: 18px;
  height: 48px;
  border-radius: 30px;
}

.city-input input {
  cursor: pointer;
}

.error-message {
  font-size: 16px;
  color: #e60d10;
  font-weight: 600;
}
</style>

