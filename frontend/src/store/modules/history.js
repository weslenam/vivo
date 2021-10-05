import history from "@/service/history"

export default {
  state:{
    response: null,
    list:[],
  },
  mutations:{
    SET_LIST(state, event){
        state.list = event
    }, 
    SET_RESPONSE(state, event){
        state.list = event
    },     
  },
  getters:{
    GET_LIST: state => {
        return state.list
    },
    GET_RESPONSE: state => {
        return state.response
    },    
  },
  actions:{
    fetchHistory({commit}, event){

        return history.fetch(event).then(response => {
            if( response.data.history )
                commit('SET_LIST',response.data.history )
        })

    },
    commitHistory({commit}, event){

        return history.commit(event).then(response => {

            commit('SET_RESPONSE',response )

        })

    },
  }
}