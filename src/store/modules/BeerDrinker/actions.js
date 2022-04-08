
import mutationTypes from './mutationTypes';

const actions = {
    getBeer({ commit }) {
    try {
      commit(mutationTypes.SET_BEER_LOADING);
        fetch("https://random-data-api.com/api/beer/random_beer")
          .then(response => {return response.json()})
          .then(info=>commit(mutationTypes.SET_BEER_SUCCESS, info))
    } catch (error) {
      commit(mutationTypes.SET_BEER_FAIL, error.code);
    }
  },

   getDrinker({ commit }) {
    try {
      commit(mutationTypes.SET_DRINKER_LOADING);
       fetch("https://random-data-api.com/api/users/random_user ")
          .then(response => {return response.json()})
          .then(info=>commit(mutationTypes.SET_DRINKER_SUCCESS, info))
    } catch (error) {
      commit(mutationTypes.SET_DRINKER_FAIL, error.code);
    }
  },
};

export default actions;
