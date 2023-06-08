import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links: []
}

export const linkSlice = createSlice({
    name: 'headerLinks',
    initialState,
    reducers: {
        setLinks: (state, action) => {
            state.links = action.payload;
        }
    }
});

export const {setLinks} = linkSlice.actions;
export default linkSlice.reducer;