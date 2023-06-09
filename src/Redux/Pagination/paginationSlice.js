import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagination: []
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.pagination = action.payload;
        }
    }
});

export const {setPagination} = paginationSlice.actions;
export default paginationSlice.reducer;