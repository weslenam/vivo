import api_users from './api_users'

export default {
  fetch(event){
    // console.log( event )
    return api_users.get(
      `users?q=${event.q}&per_page=${event.per_page}&page=${event.page}`
    )
  },
}