import React from 'react';
import styled from 'styled-components';
import ProductForm from '../../molecules/ProductForm/ProductForm';
import AppContext from '../../../context';

const Wrapper = styled.div`
  padding: 70px 80px 50px;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  background-color: #e5e5e5;
  box-shadow: 0 10px 20px -5px black;
  position: fixed;
`;

const CloseButton = styled.button`
  width: 27px;
  height: 27px;
  border: none;
  position: absolute;
  right: 30px;
  top: 30px;
`;

const Modal = ({ closeModalFn }) => (
  <AppContext.Consumer>
    {context => (
      <Wrapper>
        <CloseButton onClick={closeModalFn}>X</CloseButton>
        <ProductForm itemEdited={context.itemEdited} />
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default Modal;
