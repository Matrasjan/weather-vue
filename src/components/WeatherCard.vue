<template>
  <el-card class="weather-card" v-if="weather">
    <h2 class="weather-title">{{ weather.name }}</h2>
    <img
        v-if="weather.weather?.length"
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        :alt="weather.weather[0].description"
    />
    <p v-if="weather.weather?.length" class="weather-desc">
      {{ weather.weather[0].description }}
    </p>
    <p>🌡 {{ Math.round(weather.main.temp) }} °C</p>
    <p>💧 {{ Math.round(weather.main.humidity) }} %</p>
    <p>🌬 {{ Math.round(weather.wind.speed) }} м/с</p>
  </el-card>
</template>

<script setup lang="ts">
import type {WeatherResponse} from '@/types/weather'

const props = defineProps<{ weather: WeatherResponse | null }>()
</script>

<style scoped>
.weather-card {
  background: #afd1ef;
  border-radius: 35px;
  padding: 16px;
}

.weather-title {
  color: #040a42;
  font-size: 30px;
  font-weight: 600;
}

.weather-desc {
  font-size: 20px;
  font-weight: 600;
  color: #040a42;
  text-transform: capitalize;
}
</style>
