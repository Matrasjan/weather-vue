import { ref } from 'vue'
import type { WeatherResponse } from '@/types/weather'
import { getWeatherByCity, getWeatherByCoords } from '@/api/weatherApi'

export function useWeather() {
    const weather = ref<WeatherResponse | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchByCity = async (city: string) => {
        try {
            loading.value = true
            error.value = null
            const { data } = await getWeatherByCity(city)
            weather.value = data
        } catch {
            error.value = 'Город не найден'
        } finally {
            loading.value = false
        }
    }

    const fetchByCoords = async (lat: number, lon: number) => {
        try {
            loading.value = true
            error.value = null
            const { data } = await getWeatherByCoords(lat, lon)
            weather.value = data
        } catch {
            error.value = 'Ошибка получения погоды'
        } finally {
            loading.value = false
        }
    }

    return { weather, loading, error, fetchByCity, fetchByCoords }
}
