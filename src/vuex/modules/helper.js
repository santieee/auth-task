const state = {
  message: 'ce',
  alert: 0,
}

const getters = {
  alert: state => state.alert,
  alertMsg: state => state.message,
}

const mutations = {
    setAlert: (state, data) => {
      state.message = data.message ? data.message: state.message
      state.alert = data.time
    },
}

export default {
    state,
    getters,
    mutations,
}