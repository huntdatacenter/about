import type { EnhanceAppContext } from 'vitepress';
// import type { App } from 'vue';
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
import TotalBlock from '../components/TotalBlock.vue';

import PriceEstimator from './components/price-estimator/PriceEstimator.vue';
import LabCard from './components/price-estimator/LabCard.vue';
import Machine from './components/price-estimator/Machine.vue';
import Storage from './components/price-estimator/Storage.vue';

import AuthorDetail from './components/blog/AuthorDetail.vue'
import Post from './components/blog/Post.vue'
import PostAuthor from './components/blog/PostAuthor.vue'
import PostDetail from './components/blog/PostDetail.vue'
import PostIcon from './components/blog/PostIcon.vue'
import Posts from './components/blog/Posts.vue'
import AuthorLayout from './components/blog/AuthorLayout.vue'

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

// NOTE: `extends: DefaultTheme` seems to be the same as `...DefaultTheme`
export default {
  extends: DefaultTheme,
  // enhanceApp({ app }: { app: App }) {
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
    context.app.component('PriceEstimator', PriceEstimator);
    context.app.component('VPButton', VPButton);
    context.app.component('LabCard', LabCard);
    context.app.component('Machine', Machine);
    context.app.component('Storage', Storage);
    context.app.component('TotalBlock', TotalBlock)
    // context.app.component('VPImage', VPImage);

    context.app.component('Posts', Posts)
    context.app.component('Post', Post)
    context.app.component('PostDetail', PostDetail)
    context.app.component('PostIcon', PostIcon)
    context.app.component('PostAuthor', PostAuthor)
    context.app.component('AuthorDetail', AuthorDetail)
    context.app.component('author', AuthorLayout)
  }
}
