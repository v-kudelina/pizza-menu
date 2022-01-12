<template lang="pug">
.full-price
  .full-price__info
    p Customer: {{ user.name }}, {{ user.address }}, {{ user.phone }}
    p Pizza size: {{ pizza.size.size || "Not selected" }}
    span Toppings: 
    span(v-for = "topping in pizza.toppings") {{ topping.name }}, 
    p Full price: {{ fullPrice }}$
</template>

<script>
export default {
  computed:{
    pizza(){
      return this.$store.state.pizza
    },
    user(){
      return this.$store.state.user
    },
    fullPrice(){
      const sotredToppings = JSON.parse(JSON.stringify(this.pizza.toppings.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (b.price > a.price) {
          return 1;
        }
        return 0;
      })));
      this.pizza.toppings.forEach((topping, index) => {
        (index + 1) % 3 === 0 && sotredToppings.pop()
      });
      
      return this.pizza.size.price + sotredToppings.reduce((acc, cur) => {
        return acc + cur.price
      }, 0)
    }
  }
}
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