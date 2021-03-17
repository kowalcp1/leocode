import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from './store/index';
import MainDataTable from './Pages/DataTable';
import './App.css';

const Routes = {
  Home: "/"
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path={Routes.Home} render={() => <MainDataTable rowsPerPage={5} />} />
      </Router>
    </Provider>
  );
}

export default App;
