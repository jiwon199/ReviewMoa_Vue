<template>
  <div class="home">
    리뷰 아이템
    {{ reviewList }}
  </div>
</template>

<script>
import { mapState } from "vuex";
const reviewStore = "reviewStore";
export default {
  name: 'ReviewItem',
   computed: {
    ...mapState(reviewStore, ["reviewList"]),
    
  },
}
</script>
