import React from 'react';
import ProductForm from '../../molecules/ProductForm/ProductForm';
import Button from '../../atoms/Button/Button';

const Modal = ({ closeModalFn }) => (
  <div>
    <Button onClick={closeModalFn}>X</Button>
    <ProductForm />
  </div>
);

export default Modal;
