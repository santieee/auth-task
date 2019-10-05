import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth'
import user from './modules/user'
import helper from './modules/helper'

export const store = new Vuex.Store({
    modules: {      
      auth,
      user,
      helper
    }
}); 