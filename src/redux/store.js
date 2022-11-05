import {configureStore} from "@reduxjs/toolkit";
import jsonDataReducer from "./reducers/jsonData";
import componentConfigReducer from "./reducers/componentConfig";
import htmlDataReducer from "./reducers/htmlData";

export const store = configureStore({
    reducer: {
        jsonData: jsonDataReducer,
        componentConfig: componentConfigReducer,
        htmlData: htmlDataReducer,
    },
});
