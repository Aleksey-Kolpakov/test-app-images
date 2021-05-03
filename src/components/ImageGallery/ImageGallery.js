import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import operations from '../../redux/images/images-operations';
import Loader from 'react-loader-spinner';
import {
  getImages,
  getError,
  getIsLoading,
} from '../../redux/images/images-selectors';

const ImageGallery = () => {
  const images = useSelector(getImages);
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const fetchImages = () => dispatch(operations.loadImagesHandler());
  useEffect(() => {
    fetchImages();
  }, []);

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
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.image_id}
            id={image.image_id}
            src={image.src}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
