import React from 'react';
import EditProduct from '../../molecules/EditProduct/EditProduct';

const ProductsEditList = ({ items, editItemFn }) => (
  <ul>
    {items.map(item => (
      <EditProduct key={item.name} editItemFn={editItemFn} {...item} />
    ))}
  </ul>
);

export default ProductsEditList;
