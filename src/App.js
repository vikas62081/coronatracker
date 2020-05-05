import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
// import thunk from 'redux-thunk'
import Reducer from './common/reducers/Reducer'
import Main from './common/container/Main'
import { ZoneGraph } from './common/components/graphs/zoneGraph/ZoneGraph';
import District from './common/container/District'
const store = createStore(Reducer, compose(
  // applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  
function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Main/>
          {/* <District/> */}
        </div>
      </Provider>
  );
}

export default App;
