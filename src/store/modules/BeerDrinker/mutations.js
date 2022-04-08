import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_BEER_LOADING](state) {
    state.isLoading = true;
  },
  [mutationTypes.SET_BEER_SUCCESS](state, data) {
    state.beer = data;
  },
  [mutationTypes.SET_BEER_FAIL](state, status) {
    state.errorCode = status;
  },

  [mutationTypes.SET_DRINKER_LOADING](state) {
    state.isLoading = true;
  },
  [mutationTypes.SET_DRINKER_SUCCESS](state, data) {
    state.drinker = data;
  },
  [mutationTypes.SET_DRINKER_FAIL](state, status) {
    state.errorCode = status;
  },


};

export default mutations;
