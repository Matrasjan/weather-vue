import { mount } from '@vue/test-utils'
import WeatherLoader from '@/components/WeatherLoader.vue'

describe('WeatherLoader.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(WeatherLoader)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
