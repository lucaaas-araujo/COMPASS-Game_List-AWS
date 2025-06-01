import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import { Login } from './pages/auth/login/Login';
import { Register } from './pages/auth/register/Register';
import { Categories } from './pages/Categories';
import { Games } from './pages/Games';
import { Home } from './pages/home/Home';
import { Plataforms } from './pages/platforms/Platforms';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/platforms' element={<Plataforms/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
