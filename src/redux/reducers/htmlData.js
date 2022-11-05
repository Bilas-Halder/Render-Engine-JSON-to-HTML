import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const htmlDataSlice = createSlice({
    name: "htmlData",
    initialState,
    reducers: {
        changeCurrentNode: (state, action) => {
            state.value[action.payload.id] = action.payload;
        },
    },
});

export const {changeCurrentNode} = htmlDataSlice.actions;

export default htmlDataSlice.reducer;
