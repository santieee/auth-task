<template>
  <div>
    <b-button variant="warning" @click="$bvModal.show('profile-modal')">Edit profile</b-button>
    <b-modal id="profile-modal">   
      <template  v-slot:default="{ hide }">
        <loader v-if="load" />
        <b-row v-else>
         <b-col>
            <p>Login</p>
            <b-input
              class="profile-input"
              placeholder="Login"
              v-model="profile.login"
            ></b-input>
            <b-input
              class="profile-input"
              placeholder="Fullname"
              v-model="profile.fname"
            ></b-input>
            <b-input
              class="profile-input"
              placeholder="Password"
              v-model="profile.password"
            ></b-input>
         </b-col>
        </b-row>
      </template>

      <template v-slot:modal-footer="{ ok }">
        <b-button variant="success btn-block" @click="save()">
          Save
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import loader from '@/components/loader'
export default {  
  props:['data'],
  data:()=>({
    profile:{},
    load: false
  }),
  components:{
    loader
  },
  mounted(){
    this.profile = Object.assign({}, this.data)
    this.profile.password = ''
  },
  methods:{
    save(){
      this.load = true
      this.$store.dispatch('updateProfile', this.profile)
        .then(() => this.$bvModal.hide('profile-modal'))    
        .finally(() => this.load = false)
    }
  }
}
</script>
<style>
  .Modal{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  .profile-input{
    margin: .25rem 0;
    color: #000 !important;
  }
  .modal-body{
    min-height: 200px;
  }
</style>