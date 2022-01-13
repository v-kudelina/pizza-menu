<template>
  <router-view />
</template>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

body
  margin: 0
  background-color: #e7e79a

button
  background-color: #af4274
  border: none
  border-radius: 6px
  padding: 20px 50px
  color: #fff
  font-weight: bold
  font-size: 20px
  cursor: pointer

  &:hover
    background: #fff
    color: #af4274
  
  &:disabled
    background-color: gray
    color: #fff
    cursor: initial
  
  &:last-child
    margin-left: 20px
  
.home, .step-1, .step-2, .step-3, .full-price
  min-height: 100vh
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

.step__input
  margin-bottom: 20px
  font-size: 20px
  font-weight: bold
</style>
