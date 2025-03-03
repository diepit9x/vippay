import { ICart } from '@/models/card/cart/cart';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: { cart: ICart[] } = { cart: [] };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: (state) => {
            state.cart = [];
        },
        addCart: (state, action: PayloadAction<ICart>) => {
            state.cart.push(action.payload);
        },
        updateCart: (state, action: PayloadAction<ICart>) => {
            const index = state.cart.findIndex(
                (item) =>
                    item.idTelco === action.payload.idTelco &&
                    item.amount === action.payload.amount,
            );

            if (index !== -1) {
                state.cart[index] = { ...state.cart[index], ...action.payload };
            }
        },
        removeCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item.uuid !== action.payload);
        },
        selectionCart: (state, action: PayloadAction<ICart>) => {
            const index = state.cart.findIndex(
                (item) =>
                    item.idTelco === action.payload.idTelco &&
                    item.amount === action.payload.amount,
            );

            if (index === -1) {
                cartSlice.caseReducers.addCart(state, action);
            } else {
                cartSlice.caseReducers.removeCart(state, {
                    type: 'cart/removeCart',
                    payload: state.cart[index].uuid,
                });
            }
        },
    },
});

export const { resetCart, addCart, updateCart, removeCart, selectionCart } =
    cartSlice.actions;

export default cartSlice.reducer;
