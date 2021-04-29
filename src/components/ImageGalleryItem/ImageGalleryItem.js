import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import actions from '../../redux/images/images-actions'
import styles from './ImageGalleryItem.module.css'
const ImageGalleryItem = ({ src, id }) => {
    const dispatch = useDispatch();
    const openModal=()=>dispatch(actions.openModal(id))
    return (
        <li onClick={() => openModal(id)} className={styles["ImageGalleryItm"]}>
            <img src={src} alt="" className={styles["ImageGalleryItem-image"]} />
        </li>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    openImage: PropTypes.func.isRequired
}