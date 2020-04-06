/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import AppContext from '../../../context';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import acceptIcon from '../../../assets/icons/tick.svg';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 25px;
  }
`;

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.itemEdited !== null) {
      this.state = this.getItemToEdit(this.props);
    } else {
      this.state = {
        id: '',
        name: '',
        category: '',
        quantity: '0',
        minQuantity: '0',
      };
    }
  }

  handleIntpuChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getItemToEdit = ({ itemEdited }) => ({
    id: itemEdited.id,
    name: itemEdited.name,
    category: itemEdited.category,
    quantity: itemEdited.quantity,
    minQuantity: itemEdited.minQuantity,
  });

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <Wrapper>
            <Heading>{context.itemEdited ? 'Edytuj' : 'Dodaj nowy'} produkt</Heading>
            <StyledForm
              autoComplete="off"
              onSubmit={
                context.itemEdited !== null
                  ? e => context.editItem(e, this.state)
                  : e => context.addItem(e, this.state)
              }
            >
              <TextField
                onChange={this.handleIntpuChange}
                value={this.state.name}
                label="Name"
                name="name"
              />
              <TextField
                onChange={this.handleIntpuChange}
                value={this.state.category}
                label="Category"
                name="category"
              />
              <TextField
                onChange={this.handleIntpuChange}
                value={this.state.quantity}
                label="Quantity"
                name="quantity"
                type="number"
              />
              <TextField
                onChange={this.handleIntpuChange}
                value={this.state.minQuantity}
                label="Minimum quantity"
                name="minQuantity"
                type="number"
              />
              {context.itemEdited ? (
                <TextField
                  onChange={this.handleIntpuChange}
                  value={this.state.id}
                  name="id"
                  type="hidden"
                />
              ) : null}
              <ButtonIcon acceptColor icon={acceptIcon} />
            </StyledForm>
          </Wrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ProductForm;
