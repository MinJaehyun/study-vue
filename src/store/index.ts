import { createStore } from 'vuex';

// 상단 export default 설정 했으므로, 각각 export default 설정할 필요없다.
export default createStore({
  state: {
    counter: 10,
  },
  getters: {},
  mutations: {
    // NOTE: 2개의 인자
    setAsyncCounter(state) {
      state.counter++;
    },
  },
  actions: {
    setSyncCounter(context) {
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => console.log(json));
      setTimeout(() => {
        console.log('동기적 카운터 증가');
        context.commit('setAsyncCounter');
      }, 1000);
    },
    // setSyncCounter2({ commit }) {
    //   commit('setCounter');
    // },
  },
  modules: {},
});
