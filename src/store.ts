/**
 * Created by Gal on 25/01/2018.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { IAbout } from "./interfaces/IAbout";

Vue.use(Vuex);

const about: IAbout = {
    countdownSeconds: 10,
};

const storeState = {
    about,
    login: {
        password: 'vueisawesome',
        username: 'galziv',
    },
};

const actions = {
    startCountDown({commit, dispatch, state}) {
        if (state.about.countdownSeconds > 0) {
            window.setTimeout(() => {
                commit('setCountdownSeconds', state.about.countdownSeconds - 1);
                dispatch('startCountDown');
            }, 1000);
        }
    },
};

const mutations = {
    setCountdownSeconds(state, seconds: number) {
        (state.about as IAbout).countdownSeconds = seconds;
    },
};

export default new Vuex.Store({
    actions,
    mutations,
    state: storeState,
});
