import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';

import { Categories } from './pages/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<>LOGIN</>} />
        <Route path='/register' element={<>REGISTER</>} />
        <Route path='/' element={<>HOME</>} />
        <Route path='/games' element={<>GAMES</>} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/platforms' element={<>PLATFORMS</>} />
      </Routes>
    </Router>
  );
}

export default App;
