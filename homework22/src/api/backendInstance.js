import axios from "axios"

const backendInstance = axios.create({
    baseURL: "https://zenquotes-proxy.onrender.com/api/random"
})

export const getQuoteApi = async () => {
    const data = await backendInstance.get('/')
    return data;
}