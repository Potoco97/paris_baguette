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
            if (state[idx].amount < 2) {
                alert('최소 주문 수량은 1개 입니다.');
                state[idx].amount = 1;
            }else{
                --state[idx].amount;
            }            
        },
        sortName(state) {
            state.sort((a, b) => a.item > b.item ? 1 : -1,);
        },

        addItem(state, action) {
            state.push(action.payload)
        },

        // addItem(state, action) {
        //     if (action.payload.type === 'addObj') {
        //         let idx = state.findIndex(a => a.id === action.payload.id)
        //         if (idx >= 0) {
        //             state[idx].amount++;
        //         } else {
        //             state.push(action.payload);
        //         }
        //     }else{
        //         return state.push(action.payload)
        //     }
        // },
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