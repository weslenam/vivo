import api_history from './api_history'
import axios from 'axios' // importada a instancia novalmente para poder alterar os parametros do axios

export default {
  fetch(){
    return api_history.get('api')
  },
  commit(event){

    let querystring = require('querystring');
    return axios.post(
        "http://0.0.0.0:8001/api",
        querystring.stringify(event), {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
    );   
  },
}