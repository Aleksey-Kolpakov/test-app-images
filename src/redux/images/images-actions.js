import { createAction } from '@reduxjs/toolkit';

const getImagesSucces = createAction('images/getImagesSucces');
const getCommentsSucces = createAction('images/getCommentsSucces');
const addCommentSucces = createAction('images/addCommentSucces');
const getBigImageSucces = createAction('images/getBigImageSucces');

const setError = createAction('setError');
const resetError = createAction('resetError');
const loaderOn = createAction('images/loaderOn');
const loaderOff = createAction('images/loaderOff');
const closeModal = createAction('images/closeModal');

export default {
  getImagesSucces,
  getCommentsSucces,
  addCommentSucces,
  getBigImageSucces,
  setError,
  resetError,
  loaderOn,
  loaderOff,
  closeModal,
};
