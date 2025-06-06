import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { ToastContainer } from 'react-toastify';
import { CategoryProvider } from './context/CategoryContext.tsx';
import { DialogProvider } from './context/DialogContext.tsx';
import { GameProvider } from './context/GameContext.tsx';
import { PlatformProvider } from './context/PlatformContext.tsx';
import { SidebarProvider } from './context/SidebarContext.tsx';
import { UserProvider } from './context/UserContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <GameProvider>
        <CategoryProvider>
          <PlatformProvider>
            <DialogProvider>
              <SidebarProvider>
                <ToastContainer position='top-right' autoClose={3000} />
                <App />
              </SidebarProvider>
            </DialogProvider>
          </PlatformProvider>
        </CategoryProvider>
      </GameProvider>
    </UserProvider>
  </StrictMode>,
);
