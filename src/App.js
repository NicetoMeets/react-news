import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Pages/Todo/Todo';
import Footer from './Layout/Footer/Footer';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react"
import store from './Common/store';
import { Provider } from 'react-redux';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='*' element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
