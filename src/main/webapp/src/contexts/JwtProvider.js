import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer:  JwtConsumer } = Context;

class JwtProvider extends Component {
  state = {
    jwt: localStorage.getItem('jwt'),
  }
  actions = {
    setJwt: (jwt) => {
      this.setState({jwt});
      if (!jwt)
        localStorage.removeItem('jwt');
      else
        localStorage.setItem('jwt', jwt);
    }
  }
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  JwtProvider,
  JwtConsumer,
}
