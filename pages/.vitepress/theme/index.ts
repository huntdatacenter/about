import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

// import GreyBlock from '../components/GreyBlock.vue';
import ProductSlider from '../components/ProductSlider.vue';
// import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { VPButton } from 'vitepress/theme';
// import { VPImage } from 'vitepress/theme';

import './custom.css';
import './common.css';

import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default {
  extends: DefaultTheme,
  enhanceApp(context: EnhanceAppContext) {
    const vuetify = createVuetify({
      components,
      directives,
    })
    context.app.use(vuetify)

    // context.app.component('GreyBlock', GreyBlock);
    context.app.component('VPButton', VPButton);
    context.app.component('ProductSlider', ProductSlider);
    // context.app.component('VPImage', VPImage);
  }
}
