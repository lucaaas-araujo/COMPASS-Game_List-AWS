import { Outlet } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';

function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
