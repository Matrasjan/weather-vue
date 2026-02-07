import { mount } from '@vue/test-utils'
import ErrorMessage from '@/components/ErrorMessage.vue'
import ElementPlus from "element-plus";

describe('ErrorMessage.vue', () => {
    it('renders error message', () => {
        const wrapper = mount(ErrorMessage, {
            global: {
                plugins: [ElementPlus]
            },
            props: {
                message: 'Город не найден'
            },
        })

        expect(wrapper.text()).toContain('Город не найден')
        expect(wrapper.html()).toMatchSnapshot()
    })
})
