
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PageRouter/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
