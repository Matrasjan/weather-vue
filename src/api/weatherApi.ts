import axios from 'axios'
import type { WeatherResponse } from '@/types/weather'

const api = axios.create({
    baseURL: process.env.VUE_APP_WEATHER_BASE_URL,
    timeout: 5000,
})

export const getWeatherByCoords = (lat: number, lon: number) =>
    api.get<WeatherResponse>('weather', {
        params: {
            lat,
            lon,
            units: 'metric',
            lang: 'ru',
            appid: process.env.VUE_APP_WEATHER_API_KEY,
        },
    })

export const getWeatherByCity = (city: string) =>
    api.get<WeatherResponse>('weather', {
        params: {
            q: city,
            units: 'metric',
            lang: 'ru',
            appid: process.env.VUE_APP_WEATHER_API_KEY,
        },
    })
