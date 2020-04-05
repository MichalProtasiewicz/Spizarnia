import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
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
    };

    return (
      <BrowserRouter>
        <MainTemplate>
          <AppContext.Provider value={contextElements}>
            <Header openModalFn={this.openModal} />
            <Switch>
              <Route exact path={routes.home} render={() => <Redirect to="/products" />} />
              <Route exact path={routes.products} component={MainPage} />
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
