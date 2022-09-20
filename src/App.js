import React  from 'react';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';




function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
              <MainPage />
          </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
