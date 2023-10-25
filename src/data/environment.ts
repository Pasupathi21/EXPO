/* eslint-disable @typescript-eslint/no-var-requires */
// require('dotenv').config()

console.log('Environment')
export const  BASE_API_ENDPOINT = 'http://localhost:2111'


export const API_ROUTES = Object.freeze({
    AUTH: {
        SIGN_IN: '/api/user/signin',
        CREATE: '/api/user/create'
    }
})