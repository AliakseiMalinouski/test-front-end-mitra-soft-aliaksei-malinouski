
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';
import { Header } from './components/Header';
import headerClasses from './components/Header.module.css';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <header className={headerClasses.Header}>
          <div className='Container'>
            <Header/>
          </div>
        </header>
        <div className='Container'>
          <PageRouter/>
        </div>
          <Pagination/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
