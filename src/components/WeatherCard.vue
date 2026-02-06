<template>
  <el-card class="weather-card" v-if="weather">
    <div class="card-content">
      <div class="left-block">
        <h2 class="weather-title">{{ weather.name }}</h2>
        <img
            v-if="weather.weather?.length"
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            :alt="weather.weather[0].description"
        />
      </div>

      <div class="right-block">
        <p v-if="weather.weather?.length" class="weather-desc">
          {{ weather.weather[0].description }}
        </p>
        <p class="degrees">🌡 {{ Math.round(weather.main.temp) }} °C</p>
        <p class="degrees">💧 {{ Math.round(weather.main.humidity) }} %</p>
        <p class="degrees">🌬 {{ Math.round(weather.wind.speed) }} м/с</p>
      </div>
    </div>
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

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.weather-title {
  color: #040a42;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;

}

.degrees {
  font-size: 18px;
}

.weather-desc {
  font-size: 20px;
  font-weight: 600;
  color: #040a42;
  text-transform: capitalize;
}

@media (max-width: 440px) {
  .card-content {
    flex-direction: column;
    align-items: center;
  }

  .right-block {
    width: 100%;
    text-align: center;
  }

  .left-block img {
    margin-bottom: 16px;
  }
}
</style>
