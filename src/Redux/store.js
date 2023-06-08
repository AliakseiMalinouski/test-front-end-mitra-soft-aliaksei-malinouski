import {configureStore} from '@reduxjs/toolkit';
import linkSlice from './Header/linkSlice';

export const store = configureStore({
    reducer: {
        headerLinks: linkSlice
    }
})