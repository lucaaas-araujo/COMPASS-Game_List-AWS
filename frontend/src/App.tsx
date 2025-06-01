import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import { Categories } from './pages/Categories';
import { Games } from './pages/Games';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<>LOGIN</>} />
        <Route path="/register" element={<>REGISTER</>} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="categories" element={<Categories />} />
          <Route path="platforms" element={<>PLATFORMS</>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;