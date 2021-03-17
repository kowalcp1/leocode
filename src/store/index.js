import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import dataTable from "./reducers/dataTable"

const store = createStore(
    combineReducers({
        dataTable,
        //...
    }),
    composeWithDevTools()
);

export default store;

