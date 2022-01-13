<template lang="pug">
.step-2
  .step__input(v-for = "topping in toppingsPull")
    input(type = "checkbox" v-model = "pizzaToppings" :value = "topping" :disabled = "disabledTopping(topping)")
    label {{topping.name}} {{topping.price}}$
  .step-2__buttons
    router-link(to = "/step1")
      button Previous (Pizza size)
    router-link(to = "/step3")
      button(:disabled = "!pizzaToppings.length") Next (Customer info)
</template>

<script>
import { toppings } from "./utils.js";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const toppingsPull = ref(toppings);

    const pizzaToppings = computed({
      get() {
        return store.state.pizza.toppings;
      },
      set(value) {
        store.commit("selectPizzaToppings", value);
      },
    });

    const disabledTopping = (selected) => {
      const { value } = pizzaToppings;

      const disableBacon =
        selected.name === "bacon" &&
        value.find((topping) => topping.name === "seafood");

      const disableSeaFood =
        selected.name === "seafood" &&
        value.find((topping) => topping.name === "bacon");

      const isTopingChosen = value.find(
        (topping) => topping.name === selected.name
      );

      return (
        !isTopingChosen && (value.length >= 6 || disableBacon || disableSeaFood)
      );
    };

    return { toppingsPull, pizzaToppings, disabledTopping };
  },
};
</script>
