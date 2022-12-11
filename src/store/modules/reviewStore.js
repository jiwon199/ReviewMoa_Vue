 
const reviewStore = {
    namespaced: true,
    state: {
      reviewList: [],
      selectIdx:null,
      
    },
    getters: {},
    mutations: {
      SET_REVIEW_LIST(state, reviewList) {
        state.reviewList=reviewList;
      },
      SET_SELECT_IDX(state,index){
        state.selectIdx=index;
      }
      
    },
    actions: {
      
    },
    
  };
  
  export default reviewStore;