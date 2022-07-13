import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType, ProductType } from "../models/ProductType";

interface CartState {
    cartItems: CartProductType[];
    savedItems: ProductType[];
}

const initialState: CartState = {
    cartItems: [],
    savedItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ item: ProductType }>) {
            state.cartItems.push({ ...action.payload.item, qty: 1 });
        },
        removeFromCart(state, action: PayloadAction<{ itemId: number }>) {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.itemId
            );
        },
        incrementCartItemQty(state, action: PayloadAction<{ itemId: number }>) {
            state.cartItems = state.cartItems.map((cartItem) =>
                cartItem.id === action.payload.itemId
                    ? { ...cartItem, qty: cartItem.qty + 1 }
                    : cartItem
            );
        },
        decrementCartItemQty(state, action: PayloadAction<{ itemId: number }>) {
            state.cartItems = state.cartItems.map((cartItem) =>
                cartItem.id === action.payload.itemId
                    ? { ...cartItem, qty: cartItem.qty - 1 }
                    : cartItem
            );
        },
        saveForLater(state, action: PayloadAction<{ item: CartProductType }>) {
            const cartProduct = action.payload.item;
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== cartProduct.id
            );
            Reflect.deleteProperty(cartProduct, "qty");
            if (!state.savedItems.find((item) => item.id === cartProduct.id)) {
                state.savedItems.push(cartProduct as ProductType);
            }
        },
        moveToCart(state, action: PayloadAction<{ item: ProductType }>) {
            const savedLaterProduct = action.payload.item;
            if (
                !state.cartItems.find(
                    (item) => item.id === savedLaterProduct.id
                )
            ) {
                state.cartItems.push({ ...savedLaterProduct, qty: 1 });
            }
            state.savedItems = state.savedItems.filter(
                (item) => item.id !== savedLaterProduct.id
            );
        },
    },
});

export const {
    addToCart,
    decrementCartItemQty,
    incrementCartItemQty,
    moveToCart,
    removeFromCart,
    saveForLater,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
