/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import EditPage from 'views/EditPage';
import AppContext from '../context';
import Header from '../components/organisms/Header/Header';
import Modal from '../components/organisms/Modal/Modal';

class Root extends React.Component {
  state = {
    items: [],
    isModalOpen: false,
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      category: e.target[1].value,
      quantity: Number(e.target[2].value),
      minQuantity: Number(e.target[3].value),
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  editItem = e => {
    e.preventDefault();

    const id = this.state.items.findIndex(({ name }) => name === e.target.parentNode.id);

    const { items } = this.state.items;

    console.log(e.target.parentNode[0].value);

    items[id].name = e.target.parentNode[0].value;
    items[id].category = e.target[1].value;
    items[id].quantity = Number(e.target[2].value);
    items[id].minQuantity = Number(e.target[3].value);

    this.setState({
      items: [items],
    });

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      editItem: this.editItem,
    };

    return (
      <BrowserRouter>
        <MainTemplate>
          <AppContext.Provider value={contextElements}>
            <Header openModalFn={this.openModal} />
            <Switch>
              <Route exact path={routes.home} render={() => <Redirect to="/products" />} />
              <Route exact path={routes.products} component={MainPage} />
              <Route path={routes.edit} component={EditPage} />
              <Route path={routes.shop} component={MainPage} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </AppContext.Provider>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default Root;
