<template>
  <div class="profile">
    <p>
      <span>Login: </span>
      <b>{{profile.login}}</b>
    </p>
    <p>
      <span>Fullname: </span>
      <b>{{profile.fname}}</b>    
    </p>
    <p>
      <span>Role: </span>
      <b>{{roleDescr[profile.access-1]}}</b>    
    </p>
    <change-profile-modal :data="profile"></change-profile-modal>
  </div>
</template>

<script>
import changeProfileModal from '@/components/changeProfileModal'
import { mapGetters } from 'vuex'
export default {
  components: {
    changeProfileModal
  },
  data: () => ({
    roleDescr: [
      'Manager',
      'Administrator'
    ]
  }),
  computed:{
    ...mapGetters([
      'profile',
      'isAuth',
    ])
  }
};
</script>