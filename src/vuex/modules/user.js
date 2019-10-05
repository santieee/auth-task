import Cookies from 'js-cookie'
import _ from 'lodash'

const state = {
  profile: Cookies.getJSON('profile') || {},
}

const getters = {
  profile: state => state.profile,
  isAuth: state => !!state.profile.login,
}

const actions = {
  setProfile: ({commit}, person) => {
    let personProfile =  _.pick(person, ['fname', 'login', 'access'])
    Cookies.set('profile', personProfile)
    commit('setProfile', personProfile)
  },
  unsetProfile: ({commit}) => {
    Cookies.remove('profile')
    commit('unsetProfile')
  },
  updateProfile: ({commit}, person) => {
    return new Promise((resolve) => {
      setTimeout(()=>{
          Cookies.set('profile', person)
          commit('setAlert', {time:3, message:'Profile update!'})    
          commit('setProfile', person)    
          resolve()
      }, Math.random()*2500)
    })
  },
}

const mutations = {
  setProfile: (state, profile) => {
    state.profile = profile;
  },
  unsetProfile: (state) => {
    state.profile = '';
  },
}

export default {
    state,
    getters,
    actions,
    mutations,
}