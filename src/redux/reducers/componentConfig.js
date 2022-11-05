import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const componentConfigSlice = createSlice({
    name: "componentConfig",
    initialState,
    reducers: {
        setNewConfig: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {setNewConfig} = componentConfigSlice.actions;

export default componentConfigSlice.reducer;
