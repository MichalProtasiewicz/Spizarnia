import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppContext from '../../../context';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import deleteIcon from '../../../assets/icons/basket.svg';
import editIcon from '../../../assets/icons/gear.svg';

const Wrapper = styled.div`
  margin-bottom: 50px;
  padding: 30px 50px 50px;
  width: 400px;
  height: 400px;
  box-shadow: 0 10px 20px -5px black;
`;

const ButtonsWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const ProductItem = ({ id, name, category, quantity, minQuantity }) => (
  <AppContext.Consumer>
    {context => (
      <Wrapper>
        <Heading>Name: {name}</Heading>
        <Paragraph>Category: {category}</Paragraph>
        <Paragraph>Quantity: {quantity}</Paragraph>
        <Paragraph>Min Quantity: {minQuantity}</Paragraph>
        <ButtonsWrapper>
          <ButtonIcon
            acceptColor
            icon={editIcon}
            onClick={context.createFormToEditItem}
            value={id}
          />
          <ButtonIcon deleteColor icon={deleteIcon} onClick={context.deleteItem} value={id} />
        </ButtonsWrapper>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  minQuantity: PropTypes.string,
};

ProductItem.defaultProps = {
  quantity: '0',
  minQuantity: '0',
};

export default ProductItem;
