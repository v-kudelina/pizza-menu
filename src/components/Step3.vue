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


export default {
  computed: {
    name: {
      get() {
        return this.$store.state.user.name
      },
      set(value) {
        this.updateUserInfo("name", value)
      }
    },
    address: {
      get() {
        return this.$store.state.user.address
      },
      set(value) {
        this.updateUserInfo("address", value)
      }
    },
    phone: {
      get() {
        return this.$store.state.user.phone
      },
      set(value) {
        this.updateUserInfo("phone", value)
      }
    }
  },
  methods: {
    updateUserInfo(field, value) {
      this.$store.commit("updateUserInfo", {field, value});
    }
  }
}
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