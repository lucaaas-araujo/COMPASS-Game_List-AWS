import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import { Login } from './pages/auth/login/Login';
import { Register } from './pages/auth/register/Register';
import { Category } from './pages/category/Category';
import { Games } from './pages/Games';
import { Home } from './pages/home/Home';
import { Platform } from './pages/platform/Platform';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='/games' element={<Games />} loader={requireAuth} /> */}
        <Route path='/games' element={<Games />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/platforms' element={<Platform />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
