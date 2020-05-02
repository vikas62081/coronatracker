import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {createStore,compose } from 'redux'
// import thunk from 'redux-thunk'
import Reducer from './common/reducers/Reducer'
import Home from './common/container/Home';
import Header from './common/components/layout/Header';
const store = createStore(Reducer,compose(
  // applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Header/>
      <Home/>
      </div>
    </Provider>
  );
}

export default App;
