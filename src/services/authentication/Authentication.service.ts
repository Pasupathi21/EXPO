/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosService from '../../libs/axios.services'
import { IConfig, Ipayload } from '../../types/global.types'
import { BASE_API_ENDPOINT,  API_ROUTES} from '../../data/environment'


class AuthenticationService{

    AXIOS!: any 
    constructor(){
        this.AXIOS = AxiosService.getApiInstance()
    }
    async signIn(query: string, paylaod: Ipayload){
        let URL = `${BASE_API_ENDPOINT}${API_ROUTES?.AUTH?.SIGN_IN}`
        if(query){
          URL += `?${query}`  
        }
        return this.AXIOS.post(URL, paylaod)
    }
}


export default new AuthenticationService()