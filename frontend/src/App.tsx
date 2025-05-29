import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/login" element={<>LOGIN</>} />
                <Route path="/register" element={<>REGISTER</>} />
                <Route path="/home" element={<>HOME</>} />
                <Route path="/games" element={<>GAMES</>} />
                <Route path="/categories" element={<>CATEGORIES</>} />
                <Route path="/platforms" element={<>PLATFORMS</>} />
            </Routes>
        </Router>
  )
}

export default App;
