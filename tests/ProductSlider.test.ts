import { mount } from "@vue/test-utils";
import ProductSlider from "../pages/.vitepress/components/ProductSlider.vue";
import { expect, test, it, describe } from "vitest";

describe('ProductSlider', () => {
  it('renders the component', () => {
    const wrapper = mount(ProductSlider, {
      products: [],
    });
    expect(wrapper.exists()).toBe(true);
  });
  // Add more test cases as needed
});
