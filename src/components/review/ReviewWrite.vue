<template>
  <div class="writeArea">
    <b-form-input
      v-model="postTitle"
      placeholder="게시글 제목을 입력하세요."
      id="titleInput"
    ></b-form-input>
    <b-form-input
      v-model="movieTitle"
      placeholder="영화 이름을 입력하세요."
      id="titleInput"
      style="width: 50%"
    ></b-form-input>
    <b-form-select v-model="genre" :options="genres" id="genreInput">
      <b-form-select-option value="" disabled selected hidden>
        <span style="color: yellow">장르를 선택하세요.</span>
      </b-form-select-option>
    </b-form-select>

    <div
      class="contentInput"
      contentEditable="true"
      placeholder="내용을 입력하세요."
      id="content"
    ></div>

    <input type="file" accept="image/*" />
    <b-button
      variant="outline-secondary"
      class="submitBtn"
      size="lg"
      @click="submit"
      >작성하기</b-button
    >
    <b-button variant="outline-secondary" class="submitBtn" size="lg"
      >이미지 추가</b-button
    >
  </div>
</template>

<script>
export default {
  name: "ReviewWrite",

  data() {
    return {
      postTitle: "",
      movieTitle: "",
      genre: "",
      genres: ["sf", "판타지", "로맨스"],
    };
  },

  methods: {
    submit() {
      if (this.isValid()) {
        var content = document.getElementById("content").innerHTML;
        console.log(content);
      } else {
        alert("모든 정보를 입력하세요.");
      }
    },
    isValid() {
      //나중에 바꾸기
      if (this.postTitle == "" || this.movieTitle == "" || this.genre == "") {
        return true;
      }
      return true;
    },
     
  },
};
</script>
<style scope>
.writeArea {
  width: 60vw;
  margin: 0 auto;
  margin-top: 3em;
}
.contentInput {
  font-size: 20px;
  margin-top: 0.5em;
  height: 50vh;
  border: 1px solid lightgray;
  padding: 10px;
  overflow: auto;
}
.contentInput:focus {
  outline: none;
}
.contentInput[placeholder]:empty:before {
  content: attr(placeholder);
  color: #555;
}
.submitBtn {
  margin-top: 0.5em;
  margin-left: 0.5em;
  float: right;
  font-size: 1.5em;
  color: sandybrown !important;
  border: 1px solid sandybrown !important;
}
.submitBtn:hover {
  background: sandybrown !important;
  border: 1px solid sandybrown !important;
  color: white !important;
}
#titleInput {
  font-size: 1.5em;
  border-radius: 0px;
  display: inline-block;
}
#titleInput:focus {
  text-decoration: none;
  outline: none;
  box-shadow: none;
}
#genreInput {
  font-size: 1.5em;
  border-radius: 0px;
  width: 50%;
  vertical-align: top;
}

#genreInput:focus {
  text-decoration: none;
  outline: none;
  box-shadow: none;
}
</style>
