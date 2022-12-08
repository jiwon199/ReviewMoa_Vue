<template>
  <div class="home">
     여기는 리뷰 보기(=메인페이지)입니다
     <review-list/>
  </div>
</template>

<script>
import ReviewList from '@/components/review/ReviewList.vue'
export default {
  name: 'HomeView',
  components: {
    ReviewList
  }
}
</script>
