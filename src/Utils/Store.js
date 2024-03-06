import { configureStore } from "@reduxjs/toolkit";
import MatchDetailsSclicer from "./MatchDetailsSclicer";


const store = configureStore({
    reducer:{
        Runs : MatchDetailsSclicer,
    }
});

export default store;

