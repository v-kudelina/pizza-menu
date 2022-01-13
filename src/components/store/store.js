import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      pizza: { size: null, toppings: [] },
      user: { name: null, address: null, phone: null },
    };
  },
  getters: {
    pizza(state) {
      return state.pizza;
    },
  },
  mutations: {
    selectPizzaSize(state, value) {
      state.pizza.size = value;
    },
    selectPizzaToppings(state, value) {
      state.pizza.toppings = value;
    },
    updateUserInfo(state, { field, value }) {
      state.user[field] = value;
    },
  },
});
