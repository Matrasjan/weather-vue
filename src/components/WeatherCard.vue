<template>
  <el-card class="weather-card" v-if="weather">
    <h2>{{ weather.name }}</h2>
    <img
        v-if="weather.weather?.length"
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        :alt="weather.weather[0].description"
    />
    <p v-if="weather.weather?.length">{{ weather.weather[0].description }}</p>
    <p>🌡 {{ weather.main.temp }} °C</p>
    <p>💧 {{ weather.main.humidity }} %</p>
    <p>🌬 {{ weather.wind.speed }} м/с</p>
  </el-card>
</template>

<script setup lang="ts">
import type { WeatherResponse } from '@/types/weather'
const props = defineProps<{ weather: WeatherResponse | null }>()
</script>

<style scoped>
.weather-card {
  background: #f0f8ff; /* светло-голубой */
  border-radius: 12px;
  padding: 16px;
}
</style>
