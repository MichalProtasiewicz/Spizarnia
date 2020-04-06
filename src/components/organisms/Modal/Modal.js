import React from 'react';
import ProductForm from '../../molecules/ProductForm/ProductForm';
import Button from '../../atoms/Button/Button';
import AppContext from '../../../context';

const Modal = ({ closeModalFn }) => (
  <AppContext.Consumer>
    {context => (
      <div>
        <Button onClick={closeModalFn}>X</Button>
        <ProductForm itemEdited={context.itemEdited} />
      </div>
    )}
  </AppContext.Consumer>
);

export default Modal;
