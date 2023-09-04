import { createStore, createLogger } from "vuex";

export default createStore({
    state: {
        counter: 10,
        count: 0
    },
    getters: {
        times2(state) {
            return state.counter * 2
        }
    },
    mutations: {
        setCounter(state, value) {
            state.counter = value;
        },
        increment(state) {
            state.count++;
        },
        decrement(state) {
            if (state.count) {
                state.count--;
            }
        }
    },
    actions: {},
    modules: {},
    plugins: [createLogger()]
});
