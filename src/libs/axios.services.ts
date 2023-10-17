/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import LocalStorageService from './localStorage.service'

class AxiosService{

    apiInstance!: AxiosInstance
    constructor() {
    }

    onRequest(config:AxiosRequestConfig ): AxiosRequestConfig | any  {
        if(config?.headers){
            config.headers['access-toek'] = LocalStorageService.getItem('access-token') || ''
        }
        return config 
    }

    onRequestError(error: AxiosError): Promise<AxiosError> {
        console.error('onRequestError: ', error)
        return Promise.reject(error)
    }

    onResponse(response: AxiosResponse): AxiosResponse{
        return response
    }

    onResponseError(error: AxiosError): Promise<AxiosError>{
        console.error('onResponseError: ', error)
        return Promise.reject(error)
    }

    // With 
    getApiInstance(){
         this.apiInstance.interceptors.request.use(this.onRequest, this.onRequestError)
         this.apiInstance.interceptors.response.use(this.onResponse, this.onResponseError)
         return this.apiInstance
       
    }
    // **************** | Axios REST methods without interceptors| *****************
    GET(){
        return axios.get
    }

    POST(){
        return axios.post
    }

    PUT(){
        return axios.put
    }

    PATCH(){
        return axios.patch
    }

    DELETE(){
        return axios.delete
    }
}
export default new AxiosService()