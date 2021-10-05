import Vue        from 'vue'
import Vuex       from 'vuex'

import axios      from 'axios'
import VueAxios   from 'vue-axios'

import App        from './App.vue'
import vuetify    from './plugins/vuetify'

import '@fortawesome/fontawesome-free/css/all.css' // 

import store      from './store'
import router     from './router'
import moment     from 'moment'

import filters   from './filters' //importa os filtros
for(let name in filters) {
    Vue.filter(name, filters[name]);
}


Vue.prototype.moment = moment;

Vue.use( VueAxios , axios )
Vue.use( Vuex )

Vue.config.productionTip = false;

new Vue({ 
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
