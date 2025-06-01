import { createContext, useContext } from 'react';

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
