import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./testSlice";
import createUserSlice from "./createUserSlice";

const store = configureStore({
    reducer: {
        test: testSlice,
        createUser: createUserSlice,
    }
})

export default store