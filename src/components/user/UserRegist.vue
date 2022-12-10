<template>
  <b-container>
    <b-row class="my-1" >
      <b-col>
        <b-card>
        <b-form >
      <b-form-group label="아이디 : " label-for="userid">
        <b-form-input id="userid" type="text" v-model="user.userid" required placeholder="id 입력" @blur="checkDuplication"></b-form-input>
      </b-form-group>
      <b-form-group label="비밀번호 : " label-for="userpwd" >
        <b-form-input id="userpwd" type="password" v-model="user.userpwd" required placeholder="비밀번호 입력" ></b-form-input>
      </b-form-group>
      <b-form-group label="이름 : " label-for="username" >
        <!-- class="form-inline" -->
        <!-- 나중에 별명도 추가 가능 -->
        <b-form-input id="username" type="text" v-model ="user.username" required placeholder="이름 입력" ></b-form-input>
      </b-form-group>
      <b-form-group label="생년월일 : " label-for="userbirth" >
        <b-form-input id="userbirth" type="text" v-model="user.userbirth" required placeholder="생년월일 8자" ></b-form-input>
      </b-form-group>
      <b-form-group label="성별 : " label-for="usergender" >
        <b-form-input id="usergender" type="text" v-model="user.usergender" required placeholder="성별 입력" ></b-form-input>
        <!-- type 선택버튼으로 변경해보기 -->
      </b-form-group>
      <b-button type="button" @click="signup">회원등록</b-button>
        </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import axios from "axios";
  export default {
    name:'UserRegist',
    data() {
      return {
        user:{
          userid:"",
          userpwd:"",
          username:"",
          userbirth:"",
          usergender:"",
        }
      }
    },
    methods:{
      checkDuplication(){
        alert("check");
      },
      signup(){
        const userid=this.user.userid;
        const userpwd=this.user.userpwd;
        const username=this.user.username;
        const userbirth=this.user.userbirth;
        const usergender=this.user.usergender;

        // 왜 check만 뜨는가
        if(!userid){
          alert("id check");
        }else if(!userpwd){
          console.log(userid);
          alert("password check");
        }else if(!username){
          console.log(userpwd);
          alert("name check");
        }else if(!userbirth){
          console.log(username);
          alert("birth check");
        }else if(!usergender){
          console.log(userbirth);
          alert("gender check");
        }else{
          console.log(usergender);
        }
      }
    }

  };
</script>
<style>

</style>