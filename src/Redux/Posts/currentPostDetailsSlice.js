import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPost: {}
}

export const currentPostDetailsSlice = createSlice({
    name: 'currentPostDetails',
    initialState,
    reducers: {
        updatePost: (state, action) => {
            state.currentPost = action.payload;
        }
    }
});

export const {updatePost} = currentPostDetailsSlice.actions;
export default currentPostDetailsSlice.reducer;