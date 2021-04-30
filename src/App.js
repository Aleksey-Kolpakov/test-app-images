import React from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useSelector } from 'react-redux';
import { getModalId } from './redux/images/images-selectors';
import Modal from './components/Modal/Modal';
import styles from './App.module.css'


const App = () => {
  const modalId = useSelector(getModalId);
  return (
    <div>
      <h1 className={styles.title} >Test App Aleksey Kolpakov</h1>
      <ImageGallery />
      {modalId && <Modal />}
    </div>
  )
}

export default App;

