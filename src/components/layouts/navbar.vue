<template>
   <b-navbar toggleable="sm" type="dark" variant="info" class="my-nav">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Main menu -->
        <b-navbar-nav >
          <template v-for="(tab,i) in tabs">
            <b-nav-item :key=i v-if="tab.access <= 1 || profile.access >= tab.access" exact active-class='active' :to="tab.link">{{tab.name}}</b-nav-item>
          </template>
          
        </b-navbar-nav>
        
        <!-- Right menu -->
        <b-navbar-nav class="auth-bar ml-auto" v-if="isAuth">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <span>{{profile.login}}</span>
            </template>
            <b-dropdown-item :to="{name: 'profile'}" active-class='active'>Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto" >
          <b-nav-item active-class='active' :to="{name: 'auth'}">Login</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
</template>

<script>
import tabs from "@/mixins/navbartabs.js" 
import { mapGetters } from 'vuex'
export default {
  mixins: [tabs],
  computed:{
    ...mapGetters([
      'profile',
      'isAuth',
    ])
  },
  methods:{
    logout(){
      this.$store.dispatch('logoutRequest')
    }
  }
}
</script>
<style>
.my-nav{
  background-color: rgba(43, 10, 191, 1) !important;
}
</style>