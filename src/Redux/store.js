import {configureStore} from '@reduxjs/toolkit';
import linkSlice from './Header/linkSlice';
import postsSlice from './Posts/postsSlice';
import currentPostDetailsSlice from './Posts/currentPostDetailsSlice';

export const store = configureStore({
    reducer: {
        headerLinks: linkSlice,
        posts: postsSlice,
        currentPostDetails: currentPostDetailsSlice
    }
})