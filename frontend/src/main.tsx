import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { CategoryProvider } from './context/CategoryContext.tsx';
import { GameProvider } from './context/GameContext.tsx';
import { PlatformProvider } from './context/PlatformContext.tsx';
import { SidebarProvider } from './context/SidebarContext';
import { DialogProvider } from './context/DialogContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <GameProvider>
        <CategoryProvider>
          <PlatformProvider>
            <DialogProvider>
              <App />
            </DialogProvider>
          </PlatformProvider>
        </CategoryProvider>
      </GameProvider>
    </SidebarProvider>
  </StrictMode>,
);