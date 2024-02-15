import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

// import GreyBlock from '../components/GreyBlock.vue';
import ProductSlider from '../components/ProductSlider.vue';
// import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { VPButton } from 'vitepress/theme';
// import { VPImage } from 'vitepress/theme';

import 'tailwindcss/tailwind.css';

import './tailwind.postcss';

import './base.css';
import './custom.css';
import './common.css';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Lara from './presets/lara';

// import 'primevue/resources/themes/aura-light-green/theme.css'

export default {
    extends: DefaultTheme,
    enhanceApp(context: EnhanceAppContext) {
        context.app.use(PrimeVue, {
            unstyled: true,
            pt: Lara,
        });
        // context.app.component('GreyBlock', GreyBlock);
        context.app.component('VPButton', VPButton);
        context.app.component('ProductSlider', ProductSlider);
        // context.app.component('VPImage', VPImage);

        context.app.component('Button', Button);

    }
}
