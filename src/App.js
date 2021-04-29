import React from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useSelector } from 'react-redux';
import { getModalId } from './redux/images/images-selectors';
import Modal from './components/Modal/Modal';


const App = () => {
  const modalId = useSelector(getModalId);
  return (
    <div>
      Test APP
      <ImageGallery />
      {modalId && <Modal/>}
    </div>
  )
}

export default App;

