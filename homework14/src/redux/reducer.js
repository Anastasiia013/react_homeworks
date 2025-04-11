import { SET_USER_INFO } from "./types";

const initialStore = {
    name: 'No user',
    status: 'No status'
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...store,
                name: action.payload.name,
                status: action.payload.status,
            }
        default:
            return store;
    }
};

export default reducer;
