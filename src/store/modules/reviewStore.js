 
const reviewStore = {
    namespaced: true,
    state: {
      reviewList: [],
      selectIdx:null,
      info:[],
      isUpdate:false
      
    },
    getters: {},
    mutations: {
      SET_REVIEW_LIST(state, reviewList) {
        state.reviewList=reviewList;
      },
      SET_SELECT_IDX(state,index){
        state.selectIdx=index;
      },
      SET_UPDATE_INFO(state,info){
        state.info=info;
      },
      SET_IS_UPDATE(state,isUpdate){
        state.isUpdate=isUpdate
      }
      
      
    },
    actions: {
      
    },
    
  };
  
  export default reviewStore;