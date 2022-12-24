<template>
    <b-container>
    <b-row class="my-1">
      <b-col>
        <b-card>
          <b-form>
            <b-form-group label="아이디 : " label-for="userId">
              <b-form-input
                id="userId"
                type="text"
                v-model="user.userId"
                required
                placeholder="id 입력"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호 : " label-for="userPwd">
              <b-form-input
                id="userPwd"
                type="password"
                v-model="user.userPwd"
                required
                placeholder="비밀번호 입력"
              ></b-form-input>
            </b-form-group>
            <b-button type="button" @click="signin">로그인</b-button>
            <b-button type="button" @click="signup">회원가입</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {mapState, mapActions} from "vuex";
const memberStore = "memberStore";

export default {
    name:"UserLogin",
    data(){
        return{
            user:{
                userid:null,
                userpwd:null,
            },
        };
    },
    computed:{
        ...mapState(memberStore,["isLogin","isLoginError","userInfo"]),
    },
    methods:{
        ...mapActions(memberStore,["userConfirm","getUserInfo"]),
        signin(){
            this.userConfirm(this.user);
            if(this.isLogin){
              this.$router.push({name:"home"});
            }
        },
        signup(){
            this.$router.push({name:"regist"});
        }
    }
}
</script>