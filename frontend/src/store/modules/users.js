import users from "@/service/users"

export default {
  state:{
    users:[],
    to_search:'',
    options:{
        page: 1,
        itemsPerPage:15,
    },
    total:0
  },
  mutations:{
    SET_TO_SEARCH(state, event){
      state.to_search = event
    },    
    SET_USERS(state, event){
      state.users = event
    },
    SET_TOTAL_USERS(state, event){
        state.total = event
    },    
  },
  getters:{
    GET_USERS: state => {
        return state.users
    },
    GET_TOTAL_USERS: state => {
        return state.total
    },
    GET_TO_SEARCH: state => {
      return state.to_search
  },    
  },
  actions:{
    fetchUsers({commit}, event){

        return users.fetch(event).then(response => {

            if( response.data.items ){
                commit('SET_USERS',         response.data.items )
                commit('SET_TOTAL_USERS',   response.data.total_count )
            }
            else{
                commit('SET_USERS', [] )
                commit('SET_TOTAL_USERS', 0 )
            }

        })

    }
  }
}