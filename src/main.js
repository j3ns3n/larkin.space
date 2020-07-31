import Vue from 'vue';
import App from './App.vue';
import titleMixin from './mixins/titleMixin';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faGithub, faTwitter, faDiscord, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
