<template>
  <nav class="topmenu">
    <ul class="nav">
      <li><router-link to="/" class="link" id="logo">리뷰 모아</router-link></li>
      <li><router-link to="/" class="link">리뷰 보기</router-link></li>
      <li><router-link to="/write" class="link">리뷰 쓰기</router-link></li>
      <!-- <li><router-link to="" class="link">회원 관련</router-link></li> --> <!--자유롭게 구성하기 -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNavBar",
};
</script>
<style>
.topmenu {
  background-color: SandyBrown;
  width: 100%;
  height: 7vh;
  margin: auto;
}

.nav {
  list-style: none;
  line-height: 7vh;
  text-align: center;
}
.link {
  color: PeachPuff;
  font-weight: bold;
  width: 100px;
  display: block;
}
#logo{
  color: white;
  font-weight: bold;
   
  width: 200px;
  display: block;
}

.link:hover {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: white;
}
</style>
