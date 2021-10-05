export default {
  state:{
    color:{
        appToolbar:{
            color: 'purple darken-3',
            icon: 'white',       
            dark: true,
            title: 'white--text',
            style: 'border-bottom: 3px solid #ffffff !important;',
        },
        main:{
            backgroundColor: 'grey lighten-4'
        },
        menu:{
            avatar: 'vivo.png' // retirado por questao de direitos de uso
        }
    }
  },
  mutations:{
    SET_COLOR_DEFAULT(state, event){
      state.color = event
    },
  },
  getters:{
    GET_COLOR_DEFAULT: state => {
      return state.color
    },    
  }
}

