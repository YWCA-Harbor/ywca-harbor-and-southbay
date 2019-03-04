import axios from 'axios'

export default axios.create({
  baseURL: 'https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/'
})
