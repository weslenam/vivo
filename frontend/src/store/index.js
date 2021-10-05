import Vue     from 'vue'
import Vuex    from 'vuex'

import sColors            from './modules/colors'
import sUsers             from './modules/users'
import sHistory           from './modules/history'

Vue.use( Vuex );

export default new Vuex.Store({
  modules:{
    sColors,
    sUsers,
    sHistory,
  }
});
