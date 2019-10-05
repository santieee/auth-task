<template>
  <div id="app">
    <alert />
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
import navbar from '@/components/layouts/navbar'
import alert from '@/components/alert'
export default {
  components: {
    navbar,
    alert
  }
}
</script>

<style>
#app {
 max-width: 1220px;
 width: 100%;
 min-height: 100vh;
 margin: 0 auto;
 background-color: rgba(171, 167, 167, .2);
 overflow-x: hidden;
}
.container{
  padding: 2rem 4rem;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .15s;
  }
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
