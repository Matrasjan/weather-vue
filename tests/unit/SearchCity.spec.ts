import { mount } from '@vue/test-utils'
import SearchCity from '@/components/SearchCity.vue'
import ElementPlus from "element-plus";

const mountComponent = () => {
    return mount(SearchCity, {
        global: {
            plugins: [ElementPlus]
        }
    })
}

describe('SearchCity.vue', () => {
    it('renders input and button', () => {
        const wrapper = mountComponent()
        expect(wrapper.find('input').exists()).toBe(true)
        expect(wrapper.find('button').exists()).toBe(true)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('emits "search" event when enter pressed', async () => {
        const wrapper = mountComponent()
        const input = wrapper.find('input')
        await input.setValue('Moscow')
        await input.trigger('keyup.enter')
        expect(wrapper.emitted()).toHaveProperty('search')
        expect(wrapper.emitted('search')![0]).toEqual(['Moscow'])
    })

    it('clears input and emits empty search', async () => {
        const wrapper = mountComponent()
        const input = wrapper.find('input')
        expect(input.exists()).toBe(true)
        await input.setValue('Moscow')
        await wrapper.vm.clearInput()

        expect(wrapper.vm.city).toBe('')
        expect(wrapper.emitted('search')![0]).toEqual([''])
    })
})
