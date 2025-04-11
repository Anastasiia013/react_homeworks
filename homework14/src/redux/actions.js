import { SET_USER_INFO } from "./types";

export const setUserInfo = (name, status) => ({
    type: SET_USER_INFO,
    payload: { name, status }
});