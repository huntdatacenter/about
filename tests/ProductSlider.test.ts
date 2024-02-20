import { mount } from "@vue/test-utils";
import ProductSlider from "../pages/.vitepress/components/ProductSlider.vue";
import { expect, test, it, describe } from "vitest";

describe('ProductSlider', () => {
  it('renders empty component', () => {
    const wrapper = mount(ProductSlider, {
      propsData: {
        products: [],
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the component', () => {
    const wrapper = mount(ProductSlider, {
      propsData: {
        products: [
          {
            title: 'Product 1',
            text: 'Describe product 1',
            img: './product1.png',
            href: '#product1',
          },
        ],
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
  // Add more test cases as needed
});
