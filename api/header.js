import  request from '../helpers/request'
import { logInUrl} from '../url/logInUrl'
export const getUserData =  (payload) =>{
    return  () => request.post(logInUrl,payload)
    // return request.get("http://api-gateway-dpc-sit.earth-aws-us.xpaas.lenovo.com/api/v1/auth/token/8f439bbc-5831-4482-8294-1286d076df31")
} 
const baseUrl = 'http://localhost:8888'
let testUrl = baseUrl + '/region/ss'
export const getNodeData =  (payload) =>{
    // return  () => request.post(logInUrl,payload)
    return  () => request.get(testUrl,payload)
}       
    