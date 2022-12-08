const reviewStore = {
    namespaced: true,
    state: {
      reviewList: [],
     
      
    },
    getters: {},
    mutations: {
      SET_REVIEW_LIST(state, reviewList) {
        state.reviewList=reviewList;
      },
      
    },
    actions: {
      
    },
  };
  
  export default reviewStore;