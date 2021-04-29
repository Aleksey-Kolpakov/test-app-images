import axios from 'axios';
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
} = actions;

axios.defaults.baseURL = 'https://tzfrontend.herokuapp.com';

const loadImagesHandler = () => dispatch => {
  dispatch(loaderOn());
  dispatch(resetError());
  axios
    .get('/images/')
    .then(({ data }) => {
      dispatch(getImagesSucces(data));
    })
    .catch(error => dispatch(setError(error.message)))
    .finally(() => dispatch(loaderOff()));
};

const openModalHandler = id => async dispatch => {
  dispatch(loaderOn());
  dispatch(resetError());
  try {
    const comments = axios.get(`/comments/${id}`);
    const bigImage = axios.get(`/images/${id}`);
    const [commentsResp, bigImageResp] = await Promise.all([
      comments,
      bigImage,
    ]);
    if (Array.isArray(commentsResp.data)) {
       dispatch(getCommentsSucces(commentsResp.data));
    }
    dispatch(getBigImageSucces(bigImageResp.data.src));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(loaderOff());
  }
};

const addCommentHandler = comentData => dispatch => {
  dispatch(loaderOn());
  dispatch(resetError());
  axios
    .post('/comments/add/', comentData)
    .then(({ data }) => dispatch(addCommentSucces(data)))
    .catch(error => console.log(error))
    .finally(() => dispatch(loaderOff()));
};

export default {
  loadImagesHandler,
  openModalHandler,
  addCommentHandler,
};
