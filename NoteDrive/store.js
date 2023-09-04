// store.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        data: '', // Initialize with your default value
    },
    mutations: {
        setData(state, newValue) {
            state.data = newValue;
        },
    },
});