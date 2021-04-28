import { createReducer } from '@reduxjs/toolkit';
import actions from './images-actions';
const {
  getImagesSucces,
  getCommentsSucces,
  addCommentSucces,
  getBigImageSucces,
  resetError,
  setError,
  loaderOn,
  loaderOff,
  closeModal,
} = actions;

export const imagesRducer = createReducer([], {
  [getImagesSucces]: (_, { payload }) => [...payload],
});

export const commentsReducer = createReducer([], {
  [getCommentsSucces]: (_, { payload }) => [...payload],
  [addCommentSucces]: (state, { payload }) => [...state, ...payload],
  [closeModal]: () => [],
});

export const bigImageReducer = createReducer('', {
  [getBigImageSucces]: (_, { payload }) => payload,
  [closeModal]: () => [],
});

export const errorReducer = createReducer(false, {
  [resetError]: () => false,
  [setError]: (state, { payload }) => payload,
});

export const loaderReducer = createReducer(false, {
  [loaderOn]: () => true,
  [loaderOff]: () => false,
});
