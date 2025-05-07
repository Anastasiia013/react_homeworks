import axios from "axios"

const backendInstance = axios.create({
    baseURL: "https://zenquotes.io/api/random"
})

export const getQuoteApi = async () => {
    const data = await backendInstance.get('/')
    return data;
}