/* eslint-disable @typescript-eslint/no-var-requires */
// require('dotenv').config()

console.log('Environment', import.meta.env.DEV)
export const  BASE_API_ENDPOINT = import.meta.env.DEV ? "http://localhost:2111" : "https://expo-api.onrender.com"
console.log('BASE_API_ENDPOINT', BASE_API_ENDPOINT)

export const API_ROUTES = Object.freeze({
    AUTH: {
        SIGN_IN: `${BASE_API_ENDPOINT}/api/user/signin`,
        CREATE: `${BASE_API_ENDPOINT}/api/user/create`
    }
})