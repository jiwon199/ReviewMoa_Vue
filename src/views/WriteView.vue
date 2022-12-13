<template>
  <div class="home">
     여기는 리뷰 쓰기 페이지입니다.
     <review-write/>
  </div>
</template>

<script>
 import ReviewWrite from '@/components/review/ReviewWrite.vue'
export default {
  name: 'WriteView',
   components: {
    ReviewWrite
  }
}
</script>
<style scoped>
 
</style>
