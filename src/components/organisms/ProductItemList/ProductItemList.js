import React from 'react';
import styled from 'styled-components';
import ProductItem from '../../molecules/ProductItem/ProductItem';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ProductItemList = ({ items }) => (
  <StyledGrid>
    {items.map(item => (
      <ProductItem key={item.id} {...item} />
    ))}
  </StyledGrid>
);

export default ProductItemList;
