import React from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useSelector } from 'react-redux';
import { getModalId } from './redux/images/images-selectors';
import Modal from './components/Modal/Modal';
import styles from './App.module.css';

const App = () => {
  const modalId = useSelector(getModalId);
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Test App Aleksey Kolpakov</h1>
        <ImageGallery />
        {modalId && <Modal />}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2018-2019</p>
      </footer>
    </div>
  );
};

export default App;
