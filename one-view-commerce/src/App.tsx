import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/users/HomePage";
import UserDetailPage from "./components/posts/UserDetailPage";

class App extends Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:id" component={UserDetailPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
