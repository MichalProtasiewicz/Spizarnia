import React from 'react';
import ProductItem from '../../molecules/ProductItem/ProductItem';

const ProductItemList = ({ items }) => (
  <ul>
    {items.map(item => (
      <ProductItem key={item.id} {...item} />
    ))}
  </ul>
);

export default ProductItemList;
