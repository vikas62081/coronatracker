import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
// import thunk from 'redux-thunk'
import Reducer from './common/reducers/Reducer'
import Header from './common/components/layout/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {routes} from './common/routes/Routes'
const store = createStore(Reducer, compose(
  // applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>
            {routes.map((route) => <Route key={route.path} {...route} />)}
          </Switch>
          {/* <Home />
          <Combine /> */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
