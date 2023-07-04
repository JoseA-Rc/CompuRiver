import React, {useState, createContext} from 'react'

// Creamos el contexto
export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  // Estado de sidebar
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  return(
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider> 
  ) 
}

export default SidebarProvider