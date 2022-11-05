import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const jsonDataSlice = createSlice({
    name: "jsonData",
    initialState,
    reducers: {
        changeJsonData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {changeJsonData} = jsonDataSlice.actions;

export default jsonDataSlice.reducer;
