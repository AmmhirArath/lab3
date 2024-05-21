import {create} from "zustand";

const useCartStore = create((set) => ({
  cartItemCount: 0,
  addToCart: () => set((state) => ({ cartItemCount: state.cartItemCount + 1 })),
}));

export default useCartStore;
