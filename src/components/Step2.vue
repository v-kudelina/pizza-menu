<template lang="pug">
.step-2
  .step__input(v-for = "topping in toppings")
    input(type = "checkbox" v-model = "pizzaToppings" :value = "topping" :disabled = "disabledTopping(topping)")
    label {{topping.name}} {{topping.price}}$
  .step-2__buttons
    router-link(to = "/step1")
      button Previous (Pizza size)
    router-link(to = "/step3")
      button(:disabled = "!pizzaToppings.length") Next (Customer info)
</template>

<script>
import { toppings } from "./utils.js"
import { mapMutations } from "vuex";

export default {
  data(){
    return {
      toppings,
    }
  },
  computed:{
    pizzaToppings: {
      get() {
        return this.$store.state.pizza.toppings
      },
      set(value) {
        this.$store.commit("selectPizzaToppings", value);
      }
    }
  },
  methods: {
    ...mapMutations(["selectPizzaToppings"]),
    disabledTopping(selected) {
      const disableBacon = selected.name === "bacon" && this.pizzaToppings.find(topping => topping.name === "seafood");
      const disableSeaFood = selected.name === "seafood" && this.pizzaToppings.find(topping => topping.name === "bacon");
      const checkLimit = this.pizzaToppings.find(topping => topping.name === selected.name)
      return !checkLimit && (this.pizzaToppings.length >= 6 || disableBacon || disableSeaFood)
    }
  },
}
</script>