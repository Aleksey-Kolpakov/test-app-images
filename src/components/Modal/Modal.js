import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/images/images-operations';
import {
  getComments,
  getBigImage,
  getModalId,
} from '../../redux/images/images-selectors';
import actions from '../../redux/images/images-actions';
import styles from './Modal.module.css';
import Form from '../Form/Form';
import sprite from '../../images/close-sprite.svg';

const Modal = () => {
  const modalRoot = document.querySelector('#modal-root');
  const BigImageSrc = useSelector(getBigImage);
  const id = useSelector(getModalId);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const fetchModalData = () => dispatch(operations.openModalHandler(id));
  const onCloseModal = () => dispatch(actions.closeModal());

  useEffect(() => {
    fetchModalData();
  }, []);
  const closeModal = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };
  const escapeModal = event => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', escapeModal);
    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, []);

  return createPortal(
    <div onClick={closeModal} className={styles.Overlay}>
      <div className={styles.Modal}>
        <div className={styles.imageFormDesk}>
          <img className={styles.bigImage} src={BigImageSrc} alt="image" />
          <div className={styles.commentsBlock}>
            <ul className={styles.commentsMobile}>
              {comments.map(comment => (
                <li key={comment.id} className={styles.listItem}>
                  <p className={styles.authorText}>{comment.name}</p>
                  <p className={styles.commentText}>{comment.description}</p>
                </li>
              ))}
            </ul>
            <Form id={id} />
          </div>
        </div>
        <ul className={styles.commentsDesctop}>
          {comments.map(comment => (
            <li key={comment.id} className={styles.listItem}>
              <p className={styles.authorText}>{comment.name}</p>
              <p className={styles.commentText}>{comment.description}</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.closeButton}
          onClick={()=>onCloseModal()}
        >
          <svg width="20" height="20">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
