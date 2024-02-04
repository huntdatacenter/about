import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

// import GreyBlock from '../components/GreyBlock.vue';
// import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { VPButton } from 'vitepress/theme';
// import { VPImage } from 'vitepress/theme';

import './custom.css';
import './common.css';

export default {
    extends: DefaultTheme,
    enhanceApp(context: EnhanceAppContext) {
        // context.app.component('GreyBlock', GreyBlock);
        context.app.component('VPButton', VPButton);
        // context.app.component('VPImage', VPImage);
    }
}
