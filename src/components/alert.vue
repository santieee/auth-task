<template>
  <div :class="alert ? 'alert' : 'alert-hide'" class='alert'>
    <b-alert
      :show="alert"
      dismissible
      variant="warning"
      @dismissed="alert=0"
      @dismiss-count-down="countDownChanged"
    >
     {{ msg }}
    </b-alert>
  </div>
</template>

<script>
  export default {
    methods: {
      countDownChanged(dismissCountDown) {
        this.alert = dismissCountDown
      },
    },
    computed:{
      alert:{
        get: function(){
          return this.$store.getters.alert;
        },
        set: function(time){
          this.$store.commit('setAlert', {time})
        }
      },
      msg(){
        return this.$store.getters.alertMsg
      }
    }
  }
</script>
<style scoped>
.alert{
  position: absolute !important;
  z-index: 10;
  margin: 1rem;
  width: 55%;
  left: 50%;
}
.alert{
  display: none;
}
</style>