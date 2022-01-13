<template lang="pug">
.step-3
  .step__input  
    label Name
    input(type = "text" v-model =  "name")  
    label Address
    input(type = "text" v-model =  "address")
    label Phone
    input(type = "text" v-model =  "phone")
  router-link(to = "/full-price")
    button(:disabled = "!name || !address || !phone") Next (Submit order info)
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const name = computed({
      get() {
        return store.state.user.name;
      },
      set(value) {
        updateUserInfo("name", value);
      },
    });

    const address = computed({
      get() {
        return store.state.user.address;
      },
      set(value) {
        updateUserInfo("address", value);
      },
    });

    const phone = computed({
      get() {
        return store.state.user.phone;
      },
      set(value) {
        updateUserInfo("phone", value);
      },
    });

    const updateUserInfo = (field, value) => {
      store.commit("updateUserInfo", { field, value });
    };

    return { name, address, phone };
  },
};
</script>

<style lang="stylus" scoped>
.step__input
  display: flex
  flex-direction: column

  label
    margin-bottom: 10px
  
  input
    width: 500px
    height: 30px
    margin-bottom: 20px
</style>
