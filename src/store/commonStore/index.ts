import commonActions from './actions';
import commonGetters from './getters';
import commonMutations from './mutations';

const commonStore = {
    namespaced: true,
    state() {
        return {};
    },
    getters: commonGetters,
    mutations: commonMutations,
    actions: commonActions
};

export default commonStore;
