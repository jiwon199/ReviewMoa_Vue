import axios from "axios";

const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      axios
        .post(process.env.VUE_APP_ROOT_URL + "/user/login", JSON.stringify(user), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((data) => {
          if (data.message === "success") {
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_USER_INFO", data.userInfo);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async userLogout({ commit }, userid) {
      axios
        .get(process.env.VUE_APP_ROOT_URL + "/user/logout/" + userid)
        .then(({ data }) => {
          if (data.message === "success") {
            commit("SET_IS_LOGIN", false);
            commit("SET_USER_INFO", null);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
export default memberStore;
