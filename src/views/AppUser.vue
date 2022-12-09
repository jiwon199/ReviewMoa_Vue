<template>
  <div class="home">
     여기는 회원가입 페이지입니다
     <user-regist/>
  </div>
</template>

<script>
import UserRegist from '@/components/user/UserRegist.vue'
export default {
  name: 'AppUser',
  components: {
    UserRegist
  }
}
</script>
