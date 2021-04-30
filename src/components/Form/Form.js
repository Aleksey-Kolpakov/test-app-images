import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import operations from '../../redux/images/images-operations'
import {getError,getIsLoading} from '../../redux/images/images-selectors'
import Loader from 'react-loader-spinner';

const Form = ({ id }) => {
  const [authorName, setAuthorName] = useState('');
  const [comment, setComment] = useState('');
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const postComment = commentData => dispatch(operations.addCommentHandler(commentData));

  const authorNameChange = ({ target }) => {
    const { value } = target;
    setAuthorName(value);
  };
  const commentChange = ({ target }) => {
    const { value } = target;
    setComment(value);
  };
  const resetForm = () => {
    setAuthorName('');
    setComment('');
  };

  const addNewComment = event => {
    event.preventDefault();
    const commentData = {
      name: authorName,
      description: comment,
      image_id: id,
    };
    postComment(commentData);
    resetForm();
  };
  return (
    <>
      {error && (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      )}
      {loading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <form className={styles.form} onSubmit={addNewComment}>
        <label className={styles.formLabel}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ваше имя"
            name="authorName"
            value={authorName}
            onChange={authorNameChange}
          />
        </label>
        <label className={styles.formLabel}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ваш комментарий"
            name="comment"
            value={comment}
            onChange={commentChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Оставить комментарий
        </button>
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
    id: PropTypes.number.isRequired,
}