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
              <img src={BigImageSrc} alt="" />
              <ul>
                  {comments.map(comment => (
                      <li key={comment.id}>
                          <p>{comment.name}</p>
                          <p>{comment.description}</p>
                     </li>
                 ))}
              </ul>
              <Form id={ id}/>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
