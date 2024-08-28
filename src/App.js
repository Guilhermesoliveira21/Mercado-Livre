import './App.css';
import Header from './components/header';
import Provider from './context/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/carrt';


function App() {
  return (
    <div className="App">
     <Provider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route  path='/carrinho' element={<Cart />} /> 
      </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
