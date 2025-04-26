import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const registerUser = requestDecorator(async payload => {
    const { data } = await backendInstance.post("/auth/register", payload);
    return data;
});

export const sendAMessage = requestDecorator(async payload => {
    const { data } = await backendInstance.post("/send/message", payload); //адрес пост запроса
    return data;
})