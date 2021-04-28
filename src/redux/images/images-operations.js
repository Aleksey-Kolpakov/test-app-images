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
  closeModal,
} = actions;


const loadImagesHandler = () => dispatch => {
    dispatch(loaderOn());
    dispatch(resetError());
    axios.get('https://tzfrontend.herokuapp.com/images/')
        .then(({data}) => {
            dispatch(getImagesSucces(data))
        })
        .catch(error => dispatch(setError(error.message)))
    .finally(()=>dispatch(loaderOff()))
}

const loadCommentsHandler = async(id) => dispatch => {
    dispatch(loaderOn());
    dispatch(resetError());
    try {
        const comments = axios.get(`https://tzfrontend.herokuapp.com/comments/${id}/`);
        const bigImage = axios.get(`https://tzfrontend.herokuapp.com/images/${id}/`);
        const [commentsResp, bigImageResp] = await Promise.all([comments, bigImage]);
        dispatch(getCommentsSucces(commentsResp.data));
        dispatch(getBigImageSucces(bigImageResp.data));
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(loaderOff())
    }
}