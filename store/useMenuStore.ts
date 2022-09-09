import create from "zustand";

interface MenuSliceInterface {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const useMenuStore = create<MenuSliceInterface>()((set) => ({
  isOpen: false,
  setIsOpen: (open) => set((state) => ({ isOpen: open })),
}));

export default useMenuStore;
