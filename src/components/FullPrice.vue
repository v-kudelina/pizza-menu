<template lang="pug">
.full-price
  .full-price__info
    p Customer: {{ user.name }}, {{ user.address }}, {{ user.phone }}
    p Pizza size: {{ pizza.size.size || "Not selected" }}
    span Toppings: 
    span(v-for = "topping in pizza.toppings") {{ topping.name }} 
    p Full price: {{ fullPrice }}$
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const pizza = computed(() => {
      return store.state.pizza;
    });

    const user = computed(() => {
      return store.state.user;
    });

    const fullPrice = computed(() => {
      const sotredToppings = JSON.parse(
        JSON.stringify(
          pizza.value.toppings.sort((a, b) => {
            if (a.price > b.price) {
              return -1;
            }

            if (b.price > a.price) {
              return 1;
            }

            return 0;
          })
        )
      );

      pizza.value.toppings.forEach((topping, index) => {
        (index + 1) % 3 === 0 && sotredToppings.pop();
      });
      
      const toppingsSum = sotredToppings.reduce((acc, cur) => {
          return acc + cur.price;
        }, 0)

      return pizza.value.size.price + toppingsSum;
    
    });

    return { pizza, user, fullPrice };
  },
};
</script>

<style lang="stylus" scoped>
p, span
  font-size: 20px
  font-weight: bold

.full-price__info
  background-color: #fff
  padding: 30px
  border-radius: 6px
</style>
