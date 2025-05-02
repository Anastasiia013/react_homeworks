import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const usersSlice = createSlice({
    name: "users",
    initialState: [
        { id: nanoid(), name: "Alice", email: "alice@example.com" },
        { id: nanoid(), name: "Bob", email: "bob@example.com" },
        { id: nanoid(), name: "Charlie", email: "charlie@example.com" },
    ]
})

export default usersSlice.reducer;