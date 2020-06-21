import  request from '../helpers/request'
import { logInUrl} from '../url/logInUrl'

// const baseUrl = 'http://localhost:8888'
const baseUrl = 'http://localhost:8080'
let testUrl = baseUrl + '/region/ss'
export const getRoomsData =  (payload) =>{
    console.log(payload,'api payload')
    // const { query } = payload
    let query = '阳光100'
    let url = baseUrl + '/roomList/' + query
    return  () => request.get(url)
} 

// export const getRoomsData =  (payload) =>{
//     return  () => request.post(logInUrl,payload)
// }       
    