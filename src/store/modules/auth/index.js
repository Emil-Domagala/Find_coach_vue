import mutationsModule from './mutations.js';
import actionsModule from './actions.js';
import gettersModule from './getters.js';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },

  mutations: mutationsModule,
  actions: actionsModule,
  getters: gettersModule,
};
