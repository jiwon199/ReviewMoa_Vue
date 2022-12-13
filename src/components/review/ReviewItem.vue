<template>
  <div class="itemBox">
  
   <b-card
    no-body
    style="max-width: 20rem; border:1px solid lightgray;"
    :img-src="reviewList[itemIdx]?.thumbnail"
    img-alt="Image"
    img-top
    class="item"
    @click="select"
  >
      
    <b-card-body class="cardBody">
      <b-card-title>{{reviewList[itemIdx]?.postTitle}}</b-card-title> <!-- 포스트 제목 -->
       <b-card-sub-title class="mb-2">영화: {{reviewList[itemIdx]?.movieTitle}}</b-card-sub-title> <!-- 영화제목 -->
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card-body>
 
  </b-card>
  
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
const reviewStore = "reviewStore";
export default {
  name: 'ReviewItem',
  
  props:["itemIdx"],
   computed: {
     
    ...mapState(reviewStore, ["reviewList"]),
    
  },
  
  methods:{
    ...mapMutations(reviewStore,["SET_SELECT_IDX"]),
    select(){
      this.SET_SELECT_IDX(this.itemIdx);
      this.$router.push('/detail');
    }
  }
}
</script>
<style>
.linkCard{
  text-decoration: none;
  color:black;
}
.linkCard:hover{
  text-decoration: none;
  color:black;
}
 
.itemBox{
  max-width: 22rem;
  display:flex;
}
.item {
  border:1px solid lightgray;
  margin: auto;
}
.item:hover {
  background:#f0f0f0;
  cursor: pointer;
}
.cardBody{
  border-top:1px solid lightgray;
}
</style>