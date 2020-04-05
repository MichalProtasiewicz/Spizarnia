import React from 'react';
import AppContext from '../../../context';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const ProductForm = () => (
  <AppContext.Consumer>
    {context => (
      <form onSubmit={context.addItem}>
        <Input placeholder="Nazwa Produktu" name="name" />
        <Input placeholder="Kategoria" name="category" />
        <Input placeholder="Ilość w spiżarni" name="quantity" />
        <Input placeholder="Minimalna ilość" name="minQuantity" />
        <Button type="submit">add new product</Button>
      </form>
    )}
  </AppContext.Consumer>
);

export default ProductForm;
