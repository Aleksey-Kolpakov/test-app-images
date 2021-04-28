import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {imagesRducer,commentsReducer,bigImageReducer,errorReducer,loaderReducer } from './images/images-reducers';

const middleware = getDefaultMiddleware();
const rootReducer = combineReducers({
    images: imagesRducer,
    comments: commentsReducer,
    bigImage: bigImageReducer,
    isLoading: loaderReducer,
    error:errorReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware,
})

export default store;