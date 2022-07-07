import { createContext, useContext, useReducer } from 'react';
import menuReduce from '../reducer/menuReducer';

const MenuContextProvider = createContext();
export const useMenuContext = () => useContext(MenuContextProvider);

export default function MenuContext({ children }) {
  const [menuState, menuDispatch] = useReducer(menuReduce, { cart: [] });

  const value = {
    menuState,
    menuDispatch,
  };

  return (
    <MenuContextProvider.Provider value={value}>
      {children}
    </MenuContextProvider.Provider>
  );
}
