import { mount } from '@vue/test-utils'
import WeatherCard from '@/components/WeatherCard.vue'

describe('WeatherCard.vue', () => {
  it('matches snapshot', () => {
    const wrapper = mount(WeatherCard, {
      props: { weather: null }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders component', () => {
    const wrapper = mount(WeatherCard, {
      props: {
        weather: null
      }
    })

    expect(wrapper.exists()).toBe(true)
  })
})
