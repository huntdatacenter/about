import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Button from '../components/Button.vue';
import FooterBlock from '../components/FooterBlock.vue';
import ContentHeader from '../components/ContentHeader.vue';
import ProductSlider from '../components/ProductSlider.vue';
import RoleSlider from '../components/RoleSlider.vue';
import ToolsSlider from '../components/ToolsSlider.vue';
import WindowSlider from '../components/WindowSlider.vue';

// 'vitepress/theme' == 'vitepress/dist/client/theme-default/components/VPButton.vue'
import { VPButton } from 'vitepress/theme';
// import { VPImage } from 'vitepress/theme';

import './custom.css';
import './common.css';

import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';

import { vuetify } from '../plugins/vuetify';

export default {
  extends: DefaultTheme,
  enhanceApp(context: EnhanceAppContext) {
    context.app.use(vuetify)

    context.app.component('hc-button', Button);
    context.app.component('FooterBlock', FooterBlock);
    context.app.component('ContentHeader', ContentHeader);
    context.app.component('ProductSlider', ProductSlider);
    context.app.component('RoleSlider', RoleSlider);
    context.app.component('ToolsSlider', ToolsSlider);
    context.app.component('WindowSlider', WindowSlider);
    context.app.component('VPButton', VPButton);
    // context.app.component('VPImage', VPImage);
  }
}
