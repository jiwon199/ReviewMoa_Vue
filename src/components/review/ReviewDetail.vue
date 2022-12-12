<template>
  <div class="content">
    <div class="titleArea"> 
     
    <div class="postTitle">{{reviewList[selectIdx].postTitle}}</div>
    <div class="movieTitle">영화 이름:{{reviewList[selectIdx].movieTitle}}</div>
    <div class="writer">
    작성자:{{reviewList[selectIdx].writer}},
    {{reviewList[selectIdx].registTime}}</div>
   </div>

   <div class="contentArea">
    <div v-for="(item, index) in reviewList[selectIdx].contentList" :key="index" :item="item"> 
       
       <div v-if="isImage(item)">
             
            <img :src = "item.content" class="img"/>
        </div>
        <div v-else>{{item.content}}</div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
 
const reviewStore = "reviewStore";
export default {
  name: 'ReviewItem',
   computed: {
    ...mapState(reviewStore, ["reviewList"]),
    ...mapState(reviewStore, ["selectIdx"]),
  },
  methods:{
    isImage(item){
        if(item.type==0){
            return false;
        }
        else{
            return true;
        }
        
    }
  }
}
</script>
<style>
.content{
  
  margin-right:15em;   
  margin-left:15em;  
  margin-top: 3em;
  margin-bottom:3em; 
}
.postTitle{
    font-size: 3em;
    font-family: 'BMJUA';
}
.movieTitle{
     font-size: 1.5em;
     color:gray;
     font-family: 'BMJUA';
}
.writer{
    font-size:1em; 
}
.contentArea{
    margin: 5px;
    margin-top:2em;
    font-size:20px;
}
.img{
    border:1px solid gray;
    margin-bottom: 1em;
    margin-top:1em;
}
</style>