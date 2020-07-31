import Vue from 'vue'
import App from './App.vue'
import titleMixin from './mixins/titleMixin'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faGithub, faTwitter, faDiscord);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
