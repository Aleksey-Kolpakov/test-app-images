import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {imagesRducer,commentsReducer,bigImageReducer } from './images/images-reducers';
const middlevare = getDefaultMiddleware();
const rootReducer = combineReducers({
    images: imagesRducer,
    comments: commentsReducer,
    bigImage: bigImageReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware,
})