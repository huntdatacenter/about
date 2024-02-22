import { mount } from "@vue/test-utils";
import ProductSlider from "../pages/.vitepress/components/ProductSlider.vue";
import { expect, it } from "vitest";

import { vuetify } from '../pages/.vitepress/plugins/vuetify';


it('renders empty component', () => {
  const wrapper = mount(ProductSlider, {
    propsData: {
      products: [],
    },
    global: {
      // components: {
      //   ProductSlider,
      // },
      plugins: [vuetify],
    }
  })

  expect(wrapper.exists()).toBe(true)
})

it('renders the component', () => {
  const wrapper = mount(
    ProductSlider,
    {
      propsData: {
        products: [
          {
            title: 'Product 1',
            text: 'Describe product 1',
            img: './product1.png',
            href: '#product1',
          },
        ]
      },
      global: {
        // components: {
        //   ProductSlider,
        // },
        plugins: [vuetify],
      }
    }
  )

  expect(wrapper.exists()).toBe(true)
})
