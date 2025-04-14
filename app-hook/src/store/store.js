import {configureStore} from "@reduxjs/toolkit"
import Counter from "../actions/Counter"
const store = configureStore({
    reducer:{
        counter:Counter
    },
})
export default store;