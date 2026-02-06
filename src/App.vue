<template>
  <div class="app">
    <SearchCity @search="fetchByCity" />

    <WeatherLoader v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />
    <WeatherCard v-if="weather" :weather="weather" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeather } from '@/composables/useWeather'
import SearchCity from '@/components/SearchCity.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import WeatherLoader from '@/components/WeatherLoader.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const { weather, loading, error, fetchByCity, fetchByCoords } = useWeather()

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
      pos => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      () => (error.value = 'Геолокация недоступна')
  )
})
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  min-height: 100vh;
  background: #18527d;
  border-radius: 30px;
  box-sizing: border-box;
}
</style>
