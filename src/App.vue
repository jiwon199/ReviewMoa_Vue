<template>
  <div id="app">
    <header-nav-bar/>
    

    <router-view/>
  </div>
</template>

<script>
import HeaderNavBar from '@/components/HeaderNavBar.vue'

export default {
  
  components: {
    HeaderNavBar
  }
}
</script>

<style>
 
</style>
