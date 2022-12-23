
const memberStore = {
    state: {
        isLogin: false,
        isLoginError: false,
        userInfo: null,
    },
    getters: {
        checkUserInfo: function (state) {
            return state.userInfo;
        }
    },
    mutations: {
        SET_IS_LOGIN: (state, isLogin) => {
            state.isLogin = isLogin;
        }
        //이어서 적기
    }
}