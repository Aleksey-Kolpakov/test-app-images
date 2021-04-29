import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import operations from '../../redux/images/images-operations';
import { getImages} from '../../redux/images/images-selectors';

const ImageGallery = () => {
     const images = useSelector(getImages);
    const dispatch = useDispatch();
    const fetchImages = () => dispatch(operations.loadImagesHandler());
    useEffect(() => {
        fetchImages()
    }, [])

    const openImage = () => {
        console.log('working');
    }
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.image_id}
          id={image.image_id}
          src={image.src}
          openImage={openImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
