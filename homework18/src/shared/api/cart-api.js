import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const createCartApi = requestDecorator(async () => {
    const { data } = await backendInstance.post("/carts");
    return data;
})

export const getCartApi = requestDecorator(async () => {
    const { data } = await backendInstance.post(`/carts/${cartId}`);
    return data;
})