import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import ContactDialog from '../components/ContactDialog.vue';
import CallDialog from '../components/CallDialog.vue';
import SimpleButton from '../components/SimpleButton.vue';
import FooterBlock from '../components/FooterBlock.vue';
import ContentHeader from '../components/ContentHeader.vue';
import ProductSlider from '../components/ProductSlider.vue';
import RoleSlider from '../components/RoleSlider.vue';
import ToolsSlider from '../components/ToolsSlider.vue';
import WindowSlider from '../components/WindowSlider.vue';
import CardElement from '../components/CardElement.vue';
import ExpandTable from '../components/ExpandTable.vue';
import ViewDataControllers from '../components/ViewDataControllers.vue';
import PriceCalculator from '../components/PriceCalculator.vue';
import LabCard from '../components/LabCard.vue';
import Machine from '../components/Machine.vue';
import Storage from '../components/Storage.vue';
import TotalBlock from '../components/TotalBlock.vue';

// 'vitepress/theme' == 'vitepress/dist/client/theme-default/components/VPButton.vue'
import { VPButton } from 'vitepress/theme';
// import { VPImage } from 'vitepress/theme';

import './custom.css';
// import './common.css';

import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';

import { vuetify } from '../plugins/vuetify';


// Search for FREE icons: https://fontawesome.com/search?o=r&m=free
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faClipboardCheck,
  faFolderOpen,
  faPeopleArrows,
  faBrain,
  faCheck,
  faInfinity,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(faClipboardCheck)
library.add(faFolderOpen)
library.add(faPeopleArrows)
library.add(faBrain)
library.add(faCheck)
library.add(faInfinity)
library.add(faQuoteLeft)
library.add(faQuoteRight)

export default {
  extends: DefaultTheme,
  enhanceApp(context: EnhanceAppContext) {
    context.app.use(vuetify)

    // Search for FREE icons: https://fontawesome.com/search?o=r&m=free
    context.app.component('font-awesome-icon', FontAwesomeIcon);
    context.app.component('ContactDialog', ContactDialog);
    context.app.component('CallDialog', CallDialog);
    context.app.component('SimpleButton', SimpleButton);
    context.app.component('FooterBlock', FooterBlock);
    context.app.component('ContentHeader', ContentHeader);
    context.app.component('ProductSlider', ProductSlider);
    context.app.component('RoleSlider', RoleSlider);
    context.app.component('ToolsSlider', ToolsSlider);
    context.app.component('WindowSlider', WindowSlider);
    context.app.component('CardElement', CardElement);
    context.app.component('ExpandTable', ExpandTable);
    context.app.component('ViewDataControllers', ViewDataControllers);
    context.app.component('PriceCalculator', PriceCalculator);
    context.app.component('VPButton', VPButton);
    context.app.component('LabCard', LabCard);
    context.app.component('Machine', Machine);
    context.app.component('Storage', Storage);
    context.app.component('TotalBlock', TotalBlock)
    // context.app.component('VPImage', VPImage);
  }
}
