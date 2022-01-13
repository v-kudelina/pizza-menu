<template lang="pug">
.step-1
  .step__input(v-for = "pizza in newSizes")
    input(type = "radio" name = "size" :value = "pizza" v-model = "pizzaSize")
    label {{pizza.size}}
  router-link(to = "/step2")  
    button(:disabled="!pizzaSize") Next (Toppings)
</template>

<script>
import { sizes } from "./utils.js";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const newSizes = ref(sizes);

    const pizzaSize = computed({
      get() {
        return store.state.pizza.size;
      },
      set(value) {
        store.commit("selectPizzaSize", value);
      },
    });

    return { newSizes, pizzaSize };
  },
};
</script>
