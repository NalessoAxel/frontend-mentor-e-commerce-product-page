import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create((setStore) => ({
    fullScreen: false,
    setStore: (fn) => setStore(produce(fn)),
}));

export const useCart = create(
    persist(
        (setStore, get) => ({
            total: 0,
            totalqty: 0,
            cartContent: [],

            addToCart: (params) => {
                setStore((state) => ({
                    total: state.total + params.price,
                    totalqty: state.totalqty + 1,
                    cartContent: [...state.cartContent, params],
                }));
            },

            updateCart: ({ params, mycart }) => {
                setStore((state) => ({
                    total: state.total + params.price,
                    totalqty: state.totalqty + 1,
                    cartContent: mycart,
                }));
            },

            clearCart: () => setStore({ totalqty: 0, total: 0, cartContent: [] }),

            removeFromCart: (params) =>
                setStore((state) => ({
                    total: state.total - params.price,
                    totalqty: state.totalqty - params.quantity,
                    cartContent: state.cartContent.filter((item) => item.id !== params.id),
                })),
        }),

        { name: 'cart' }
    )
);

export default useStore;
