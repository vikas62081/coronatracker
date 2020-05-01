import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './common/reducers/Reducer'
import Home from './common/container/Home';
const store = createStore(Reducer,compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        {/* <Combine /> */}
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
