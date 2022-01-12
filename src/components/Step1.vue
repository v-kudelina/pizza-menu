<template lang="pug">
.step-1
  .step__input(v-for = "pizza in sizes")
    input(type = "radio" name = "size" :value = "pizza" v-model = "pizzaSize")
    label {{pizza.size}}
  router-link(to = "/step2")  
    button(:disabled="!pizzaSize") Next (Toppings)

</template>

<script>
import { sizes } from "./utils.js"
import { mapMutations } from "vuex";

export default {
  data(){
    return{
      sizes
    }
  },
  computed:{
    pizzaSize:{
      get() {
        return this.$store.state.pizza.size
      },
      set(value) {
        this.$store.commit("selectPizzaSize", value);
      }
    }
  },
  methods: {
    ...mapMutations(["selectPizzaSize"]),
  },
}
</script>
