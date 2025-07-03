import { configureStore, createSlice } from "@reduxjs/toolkit";


let cart = createSlice({
    name: 'cart',
    initialState: [],
reducers: {
        addCount(state, action) {
            let idx = action.payload;
            ++state[idx].amount;
        },
        desCount(state, action) {
            let idx = action.payload;
            --state[idx].amount;
        },
        removeCount(state, action) {
            let idx = state.findIndex(data => data.id === action.payload)
            --state[idx].amount
            if (state[idx].amount < 1) {
                alert('최소 주문 수량은 1개 입니다.');
                state[idx].amount = 1;
            }
        },
        sortName(state) {
            state.sort((a, b) => a.item > b.item ? 1 : -1,);
        },
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
            let idx = state.findIndex(a => a.id === action.payload)
            state.splice(idx, 1)
        },
    }
})

export let { addCount, sortName, addItem, desCount, removeItem, removeCount } = cart.actions

export default configureStore({
    reducer: {
        cart:cart.reducer
    }
})