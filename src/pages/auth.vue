<template>
  <div>   
    <div  class="auth-container">      
      <form class="myform" @submit.stop.prevent="onLogin">
        <loader v-if="load"></loader>
        <template v-else>
          <div v-if="authError" class="alert alert-danger" role="alert">
            {{authError}}
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Login</label>
            <input type="text" class="form-control" v-model="form.login" required/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control error" v-model="form.password" required />
            <div class="invalid-feedback">Example invalid custom file feedback</div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </template>
      </form>
      <br><br>
      <div>
        <b-table striped hover class="mockUser-list" :items="mockUsers" :fields="fields"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import loader from '@/components/loader'
import mockUsers from '@/response/users'
export default {
  data: () => ({
    form: {
      login: "",
      password: ""
    },
    authError:'',
    load: false,
    mockUsers,
    fields:[
      {key:'login',label: 'Логин'},
      {key: 'password', label: 'Пароль'},
      {key:'accessDescr', label:'Роль'},    
    ]
  }),
  components:{
    loader
  },
  methods:{
    onLogin(){
      this.load = true
      this.$store.dispatch('authRequest', this.form)
      .catch(err => this.authError = err) 
      .finally(() => this.load = false)
    }
  }
};
</script>

<style>
.auth-container {
  margin: 0 auto 2rem;
  width: 50%;
  min-width: 250px;
}
.myform {
  position: relative;
  padding: 2rem;
  border-radius: 5%;
  min-height: 300px;
  background-color: rgba(194, 194, 194, 0.25);
}
.mockUser-list{
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
</style>
