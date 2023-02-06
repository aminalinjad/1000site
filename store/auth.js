const state = () => ({
  isAuth: false,
  accessToken: '',
  userInfo: null,
  showLoginModal: false,
  showRegisterModal: false
})

const getters = {
  GET_IS_AUTH: (state) => {
    return state.isAuth
  },
  GET_ACCESS_TOKEN: (state) => {
    return state.accessToken
  },
  GET_USER_INFO: (state) => {
    return state.userInfo
  },
  GET_SHOW_LOGIN_MODAL_STATE: (state) => {
    return state.showLoginModal
  },
  GET_SHOW_REGISTER_MODAL_STATE: (state) => {
    return state.showRegisterModal
  },
}

const mutations = {
  MUTATE_CHECK_IS_AUTH: (state) => {
    localStorage.getItem('isAuth') === 'true'
      ? (state.isAuth = true)
      : (state.isAuth = false)
  },
  MUTATE_ACCESS_TOKEN: (state, payload) => {
    state.accessToken = payload
  },
  MUTATE_SET_USER_INFO: (state, payload) => {
    state.userInfo = payload
  },
  MUTATE_SHOW_LOGIN_MODAL: (state, payload) => {
    console.log(payload)
    state.showLoginModal = payload
  },
  MUTATE_SHOW_REGISTER_MODAL: (state, payload) => {
    state.showRegisterModal = payload
  },
}

const actions = {
  ACTION_CHECK_IS_AUTH: ({ commit }) => {
    commit('MUTATE_CHECK_IS_AUTH')
  },
  ACTION_ACCESS_TOKEN: ({ commit }, payload) => {
    commit('MUTATE_ACCESS_TOKEN', payload)
  },
  ACTION_SET_USER_INFO: ({ commit }, payload) => {
    commit('MUTATE_SET_USER_INFO', payload)
  },
  ACTION_SHOW_LOGIN_MODAL: ({ commit }, payload) => {
    console.log(payload)
    commit('MUTATE_SHOW_LOGIN_MODAL', payload)
  },
  ACTION_SHOW_REGISTER_MODAL: ({ commit }, payload) => {
    commit('MUTATE_SHOW_REGISTER_MODAL', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
