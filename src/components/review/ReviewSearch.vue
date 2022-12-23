<template>
  <div class="mainArea">
    <div class="content">
      <!--
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
    ></b-form-select> -->
     <b-form-select
      v-model="selectedSearch"
      :options="searchOptions"
      class="mb-3"
      id="genreOption"
      disabled-field="notEnabled"
    ></b-form-select>
    <b-form-input   id="input" placeholder="검색어를 입력하세요." ></b-form-input>
    <b-button id="btn">조회</b-button>

     
 <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selectedOrder"
        :options="orderOptions"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        size="md"
        name="radio-btn-outline"
        buttons
        @change="changeSort"
      ></b-form-radio-group>
    </b-form-group>

    </div>

     
  </div>
</template>

<script>
//import axios from "axios";
import { mapMutations } from "vuex";
const reviewStore = "reviewStore";
export default {
  name: "ReviewSearch",
  data() {
    return {
      selectedOrder: "최신순",
      orderOptions: ["최신순", "조회순"],
      selectedGenre: "모든 장르",
      genreOptions: ["모든 장르","SF", "판타지", "로맨스","누아르","공포","코미디","애니메이션"],
      selectedSearch:"포스트 제목",
      searchOptions:["포스트 제목","영화 이름","태그"]

    };
  },

  methods: {
     ...mapMutations(reviewStore,["SET_SORT"]),
    ...mapMutations(reviewStore,["SET_GENRE"]),
    changeSort(){
      if(this.selectedOrder=="최신순") this.SET_SORT("postId");
      else this.SET_SORT("hit");
    }
  },
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
