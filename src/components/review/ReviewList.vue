<template>
  <div class="home">
    리뷰 목록
    <review-item />
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
  created() {
    this.getList();
  },
  methods: {
     ...mapMutations(reviewStore,["SET_REVIEW_LIST"]),
    getList() {
      axios
        .get(process.env.VUE_APP_ROOT_URL+"/board/list")
        .then((response) => {
          this.SET_REVIEW_LIST(response.data);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
};
</script>
