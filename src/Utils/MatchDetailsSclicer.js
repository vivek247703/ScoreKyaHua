import { createSlice } from "@reduxjs/toolkit";

const MatchDetailsSclicer = createSlice({
    name: "Runs",
    initialState : {
      messages : []
  },
    reducers: {
      addMessage: (state, action) => {
        //state.messages.splice(LIVE_CHAT_COUNT, 1);
        state.messages.splice(10,1)
        //console.log(action.payload);
        state.messages.unshift(action.payload);
        //state.messages = [...state.messages, action.payload];
      },
    },
  });
  
  export const { addMessage } = MatchDetailsSclicer.actions;
  export default MatchDetailsSclicer.reducer;