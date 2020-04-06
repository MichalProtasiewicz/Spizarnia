import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import deleteIcon from '../../../assets/icons/basket.svg';
import editIcon from '../../../assets/icons/gear.svg';

const ProductItem = ({ id, name, category, quantity, minQuantity }) => (
  <AppContext.Consumer>
    {context => (
      <div>
        <Heading>Name: {name}</Heading>
        <Paragraph>Category: {category}</Paragraph>
        <Paragraph>Quantity: {quantity}</Paragraph>
        <Paragraph>Min Quantity: {minQuantity}</Paragraph>
        <ButtonIcon icon={deleteIcon} onClick={context.deleteItem} value={id} />
        <ButtonIcon icon={editIcon} onClick={context.createFormToEditItem} value={id} />
      </div>
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
