<template>
  <div class="mainArea">
    <div class="content">
    <b-form-select
      v-model="selectedOrder"
      :options="orderOptions"
      class="mb-3"
      id="orderOption"
      disabled-field="notEnabled"
    ></b-form-select>
    <b-form-select
      v-model="selectedGenre"
      :options="genreOptions"
      class="mb-3"
      id="genreOption"
      disabled-field="notEnabled"
    ></b-form-select>
    <b-form-input   id="input" placeholder="검색어를 입력하세요." ></b-form-input>
    <b-button id="btn">조회</b-button>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "ReviewSearch",
  data() {
    return {
      selectedOrder: "최신순",
      orderOptions: ["최신순", "조회순"],
      selectedGenre: "모든 장르",
      genreOptions: ["모든 장르","SF", "판타지", "로맨스","누아르","공포","코미디","애니메이션"],
    };
  },

  methods: {},
};
</script>
<style scoped>
.mainArea {
  width: 60vw;
  margin: 0 auto;
  
}
.content{
    margin-top:2em; 
    text-align: center;
}
#orderOption {
    width:7vw;
    border-radius: 0px;
}
#genreOption{
    width:7vw;
    border-radius: 0px;
}
#input {
    width:17vw;
    display: inline-block;
    vertical-align: top;
    border-radius: 0px;
}
#input:focus {
  text-decoration: none;
  outline: none;
  box-shadow: none;
}
#btn{
    background: sandybrown;
    vertical-align: top;
    border:1px solid sandybrown;
    border-radius: 0px;
}
</style>
