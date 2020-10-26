import React, {Component} from "react";
import {Provider} from "react-redux";

import store from "./index";

export const withStore = (WrappedComponent: React.ComponentType) => {
  return class extends Component {
    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  };
};
