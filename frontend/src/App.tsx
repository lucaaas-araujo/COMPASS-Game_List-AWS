import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { Categories } from './pages/Categories';
import { Games } from './pages/Games';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<>LOGIN</>} />
        <Route path='/register' element={<>REGISTER</>} />
        <Route path='/' element={<>HOME</>} />
        <Route path='/games' element={<Games />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/platforms' element={<>PLATFORMS</>} />
      </Routes>
    </Router>
  );
}

export default App;
