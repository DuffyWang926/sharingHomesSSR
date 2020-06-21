import  request from '../helpers/request'
import { mapCenterUrl} from '../url/mapUrl'
export const getMapCenterData =  (payload) =>{
    let params = {
        key:'72cc083a39134dad4acf0d47f499a463',
        city:'北京',
        keywords:'阳光100'
    }
    return  () => request.get(mapCenterUrl,params)
} 
