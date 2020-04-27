import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import Combine from './common/container/Combine';
import Reducer from './common/reducers/Reducer'
const store = createStore(Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Combine />
      </div>
    </Provider>
  );
}

export default App;
