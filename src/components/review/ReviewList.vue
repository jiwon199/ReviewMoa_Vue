<template>
  <div class="home">
    
    <b-card-group  class="listBox"> 
      <div v-for="(item, index) in reviewList" :key="index" :item="item"> 
      <review-item :itemIdx = "index"  class="item"  />  
      </div>
    </b-card-group>  
  
  </div>
</template>

<script>
import ReviewItem from "./ReviewItem.vue";
import axios from "axios";
import { mapMutations } from "vuex";
const reviewStore = "reviewStore";
export default {
  name: "ReviewList",
  components: {
    ReviewItem,
  },
  data() {
    return {
      itemIdx : "",
      reviewList:[],
    }
  },
  created() {
    this.getList();
  },
  methods: {
     ...mapMutations(reviewStore,["SET_REVIEW_LIST"]),
    ...mapMutations(reviewStore,["SET_SELECT_IDX"]),
    getList() {
      axios
        .get(process.env.VUE_APP_ROOT_URL+"/board/list?page=0&sort=postId,desc&genre=모든 장르")
        .then((response) => {
          this.reviewList=response.data.content;
          this.SET_REVIEW_LIST(this.reviewList);
           
        })
        .catch((error) => {
          console.dir(error);
        });
    },
     
  },
};
</script>
<style scoped>
 
.listBox{
    
   margin-right:6em;   
   margin-left:6em;  
}
.item{
   margin:0.5em;
   
}
</style>