
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        
      </Provider>
    </BrowserRouter>
  );
}

export default App;
